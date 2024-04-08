# importando y configurando Flask
from flask import Flask
app = Flask(__name__)
from flask_mongoengine import MongoEngine
from flask_cors import CORS
cors = CORS(app)

# configuracion, inicializacion mongoengine
app.config['MONGODB_SETTINGS'] = [{
    "db": "productos-app-flask-react",
    "host": "localhost",
    "port": 27017
}]

db = MongoEngine(app)

# controladores
from controllers.productos_controller import *
from controllers.usuarios_controller import *


# corriendo el servidor
if __name__ == '__main__':
    app.run(port=8080, debug=True)