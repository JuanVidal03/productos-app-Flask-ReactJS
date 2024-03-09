# importando y configurando Flask
from flask import Flask
app = Flask(__name__)

# controladores
from controllers.productos_controller import *


# corriendo el servidor
if __name__ == '__main__':
    app.run(port=8080, debug=True)