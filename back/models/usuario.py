from database.conexion import DBConexion

class Usuario:
    def __init__(self, nombre, email, password, rol="estandar"):
        self.nombre = nombre
        self.email = email
        self.password = password
        self.rol = rol

    def registrar(self):
        db = DBConexion()
        conn = db.conectar()
        if conn:
            cursor = conn.cursor()
            sql = "INSERT INTO Usuarios (nombre_user, email_user, pass_user, rol) VALUES (%s, %s, %s, %s)"
            valores = (self.nombre, self.email, self.password, self.rol)
            cursor.execute(sql, valores)
            conn.commit()
            conn.close()
            return True
        return False

    @staticmethod
    def login(email, password):
        db = DBConexion()
        conn = db.conectar()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM Usuarios WHERE email_user=%s AND pass_user=%s", (email, password))
        user_data = cursor.fetchone()
        conn.close()
        if user_data:
            return Usuario(user_data['nombre_user'], user_data['email_user'], None, user_data['rol'])
        return None