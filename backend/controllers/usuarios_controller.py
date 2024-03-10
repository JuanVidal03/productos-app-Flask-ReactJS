# importando usuarios
from db.mongoDB import usuarios
from app import app
from flask import request 
import yagmail

email = 'juanmvg2003@gmail.com'
password = 'dudm ehje syad dylx'

# todos los usuarios
@app.route('/usuarios', methods=['GET'])
def todos_usuarios():
    try:
        all_users = list(usuarios.find({}, projection={'_id': False}))
        return all_users
        
    except Exception as error:
        print(error)
        return str(error)


# ingreso a la aplicacion
@app.route('/login', methods=['GET'])
def mail_confirmacion():
    try:
        credenciales = request.json
        
        # verificando que las credenciales existan en la base de datos
        for usuario in usuarios.find():
            if (credenciales['mail'] == usuario['mail']) and (str(credenciales['password']) == str(usuario['password'])):
                # enviando correo
                yag = yagmail.SMTP(user = email, password = password)
                destinatarios = ['cesarmcuellar@gmail.com', 'juanmvg2003@gmail.com']
                asunto = f'El usuario {credenciales['usuario']} ingreso a la aplicacion'
                mensaje = f'Me permito informar que el usuario {credenciales['usuario']} ha ingresado al sistema!'
                yag.send(destinatarios, asunto, mensaje)
                
                return f'El usuario {credenciales['usuario']} ha ingresado a la aplicacion', 202
        # en caso de no encontrar al usuario
        else:
            return 'El usuario no existe', 400
        
    except Exception as error:
        print(error)
        return str(error), 400