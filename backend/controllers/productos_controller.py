# importando los productos
from db.mongoDB import productos
from app import app
from flask import request

# obteniendo todos los productos
@app.route('/productos', methods=['GET'])
def todos_los_productos():
    try:
        # retornando todos los productos sin el _id creado por mongo
        all_products = list(productos.find({}, projection={'_id': False}))
        return all_products, 202
    
    except Exception as error:
        return str(error), 400


# obtener producto por id
@app.route('/producto/<codigo>', methods=['GET'])
def producto_por_id(codigo):
    try:
        producto = productos.find_one({"codigo": int(codigo)}, projection={'_id': False})
        # verificanp que el producto si exista
        if producto:
            return producto, 202
        else:
            return f'El producto con codigo {codigo} no existe', 400
        
    except Exception as error:
        return str(error), 400


# crear un producto
@app.route('/productos', methods=['POST'])
def crear_producto():
    try:
        producto = request.json
        # verificando que el codigo no se repita y agregando el producto
        all_products = productos.find()
        for product in all_products:
            if product['codigo'] == producto['codigo']:
                return f'Producto con codigo: {producto["codigo"]} ya existe!', 400
        else:
                productos.insert_one(producto)
                return 'Producto agregado con exito!', 202 
        
    except Exception as error:
        return str(error), 400


# actualizar prodcto por codigo
@app.route('/producto/<codigo>', methods=['PUT'])
def actualizar_por_codigo(codigo):
    try:
        # producto actualizado
        new_product = request.json

        #verificando que el producto no exista y actualizarlo
        existe_producto = productos.find_one({"codigo": int(codigo)}, projection={'_id': False})

        if existe_producto != None:
            updated_product = productos.find_one_and_update({"codigo": int(codigo)}, {"$set": new_product})
            return 'Producto actulizado exitosamente!', 202
        
        else:
            return f'El producto con el codigo {codigo} no existe', 400
    
    except Exception as error:
        print(error)
        return str(error), 400

    
# eliminar por id
@app.route('/producto/<codigo>', methods=['DELETE'])
def eliminar_por_codigo(codigo):
    try:
        
        #verificando que el producto no exista y eliminarlo
        existe_producto = productos.find_one({"codigo": int(codigo)}, projection={'_id': False})

        if existe_producto != None:
            result = productos.find_one_and_delete({"codigo": int(codigo)})
            print(result)
            return f'Producto con codigo {codigo} eliminado exitosamente!', 202
        
        else:
            return f'El producto con el codigo {codigo} no existe', 400
        
    except Exception as error:
        return str(error), 400