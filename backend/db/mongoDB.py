# importando libreria para usar mongodb
import pymongo

conexion = pymongo.MongoClient("mongodb://localhost:27017");
DB = conexion['productos-app-flask-react']
productos = DB['productos']