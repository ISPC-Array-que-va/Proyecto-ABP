import mysql.connector

class DBConexion:
    def __init__(self):
        self.config = {
            'host': 'localhost',
            'user': 'root',      # Por defecto en XAMPP/MySQL
            'password': '',      # Tu contraseña de MySQL
            'database': 'hocico_db'
        }

    def conectar(self):
        try:
            conexion = mysql.connector.connect(**self.config)
            return conexion
        except mysql.connector.Error as err:
            print(f"Error de conexión: {err}")
            return None