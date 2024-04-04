# importar yagmail
import yagmail
email = 'juanmvg2003@gmail.com'
password = 'dudmehjesyaddylx'

def enviarEmailDeConfirmacion(usuario):
    # enviando correo
    yag = yagmail.SMTP(user = email, password = password)
    destinatarios = ['juanmvg2003@gmail.com']
    asunto = f'El usuario {usuario['nombre']} ingreso a la aplicacion'
    mensaje = f'Me permito informar que el usuario {usuario['nombre']} ha ingresado al sistema!'
    yag.send(destinatarios, asunto, mensaje)