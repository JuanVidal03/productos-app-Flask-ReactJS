# importando los productos
from db.mongoDB import productos
from app import app
from flask import request, jsonify
from models.productos_model import Producto

# obteniendo todos los productos
@app.route('/productos', methods=['GET'])
def todos_los_productos():
    try:
        all_products = Producto.objects()
        data = jsonify(all_products)
        return data, 202
            
    except Exception as error:
        return str(error), 400


# obtener producto por id
@app.route('/producto/<codigo>', methods=['GET'])
def producto_por_id(codigo):
    try:
        
        producto = Producto.objects(codigo=codigo)
        data = jsonify(producto)
        # verificando que el producto si exista
        if data:
            return data, 202
        else:
            return f'El producto con codigo {codigo} no existe', 400
        
    except Exception as error:
        return str(error), 400


# crear un producto
@app.route('/productos', methods=['POST'])
def crear_producto():
    try:
        producto = request.json
        # todos los productos
        all_products = Producto.objects()
        for product in all_products:
            if product['codigo'] == producto['codigo']:
                return f'Producto con codigo: {producto["codigo"]} ya existe!', 400
        else:
                esquema_producto = Producto(
                    categoria=producto['categoria'],
                    codigo=producto['codigo'],
                    nombre=producto['nombre'],
                    descripcion=producto['descripcion'],
                    precio=producto['precio']
                )
                esquema_producto.save()
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
        producto  = Producto.objects(codigo=codigo)
        data = jsonify(producto)

        if producto:
            
            producto.update(
                categoria = new_product['categoria'],
                codigo = new_product['codigo'],
                nombre = new_product['nombre'],
                descripcion = new_product['descripcion'],
                precio = new_product['precio'],
            )
            
            return 'Producto actulizado exitosamente!', 202
        
        else:
            return f'El producto con el codigo {codigo} no existe', 400
    
    except Exception as error:
        return str(error), 400

    
# eliminar por id
@app.route('/producto/<codigo>', methods=['DELETE'])
def eliminar_por_codigo(codigo):
    try:
        #verificando que el producto no exista y eliminarlo
        producto = Producto.objects(codigo = codigo)

        if producto:
            producto.delete()
            return f'Producto con codigo {codigo} eliminado exitosamente!', 202
        
        else:
            return f'El producto con el codigo {codigo} no existe', 400
        
    except Exception as error:
        return str(error), 400