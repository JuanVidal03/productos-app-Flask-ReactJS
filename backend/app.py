# importando y configurando Flask
from flask import Flask
app = Flask(__name__)
from flask_cors import CORS
cors = CORS(app)

# controladores
from controllers.productos_controller import *
from controllers.usuarios_controller import *


# corriendo el servidor
if __name__ == '__main__':
    app.run(port=8080, debug=True)