# importar dependencias
import mongoengine as me

# esquema del producto
class Producto():
    codigo = me.IntField(required=True, unique=True)
    nombre = me.StringField(max_length=50)
    precio = me.IntField()
    categoria = me.StringField(max_length=50)
    descripcion = me.StringField(max_length=120)