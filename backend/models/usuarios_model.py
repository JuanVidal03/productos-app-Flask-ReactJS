# importar las dependencias
import mongoengine as me

# esquema del usuario
class Usuario(me.Document):
    nombre = me.StringField(max_length=50)
    password = me.StringField(max_length=100, required=True)
    mail = me.EmailField(unique=True, required=True)