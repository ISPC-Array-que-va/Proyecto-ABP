from models.usuario import Usuario

def sistema():
    print("--- BIENVENIDO A HOCICO (SISTEMA DE GESTIÓN) ---")
    email = input("Email: ")
    psw = input("Contraseña: ")
    
    user = Usuario.login(email, psw)
    
    if user:
        print(f"\nHola {user.nombre}! Acceso como: [{user.rol}]")
        if user.rol == "admin":
            print("1. Listar todos los usuarios")
            print("2. Cambiar roles")
            print("3. Eliminar usuario")
        else:
            print("1. Ver mis datos")
            print("2. Editar mis datos")
    else:
        print("Credenciales incorrectas.")

if __name__ == "__main__":
    sistema()