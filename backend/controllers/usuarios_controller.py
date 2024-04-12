# importando usuarios
from db.mongoDB import usuarios
from app import app
from flask import request, jsonify
# funcion que envia los correos
from utils.sendEmailYagmail import enviarEmailDeConfirmacion
# para funciones en segundo plano
import threading
# mongoengine
from models.usuarios_model import Usuario

# todos los usuarios
@app.route('/usuarios', methods=['GET'])
def todos_usuarios():
    try:

        all_users = Usuario.objects()
        data = jsonify(all_users)
        return data, 202
        
    except Exception as error:
        return str(error), 400


# ingreso a la aplicacion
@app.route('/login', methods=['POST'])
def mail_confirmacion():
    try:
        credenciales = request.json
        # obteniendo todos los usuarios
        all_users = Usuario.objects()
        
        # verificando que las credenciales existan en la base de datos
        for usuario in all_users:
            if (credenciales['mail'] == usuario['mail']) and (str(credenciales['password']) == str(usuario['password'])):
                # enviar email de confirmacion al ingresar a la aplicacion
                thread = threading.Thread(target=enviarEmailDeConfirmacion, args=(usuario,))
                thread.start()

                return f'El usuario {usuario['nombre']} ha ingresado a la aplicacion', 202
                
        # en caso de no encontrar al usuario
        else:
            return f'El usuario { credenciales['mail'] } no existe', 400
        
    except Exception as error:
        return str(error) , 400