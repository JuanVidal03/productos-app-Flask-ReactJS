# importar las dependencias
import mongoengine as me

# esquema del usuario
class Usuario:
    nombre = me.StringField(max_length=50)
    password = me.StringField(max_length=100)
    mail = me.EmailField(unique=True)