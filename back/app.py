# El punto de entrada (el que "prende" el servidor). #

# Ejemplo rápido en Python (Flask)
@app.route('/api/mascotas')
def get_mascotas():
    # Aquí iría tu consulta SQL (SELECT * FROM mascotas)
    lista_perros = [
        {"id": 1, "nombre": "Firulais", "edad": 2},
        {"id": 2, "nombre": "Luna", "edad": 4}
    ]
    return jsonify(lista_perros) # Esto es lo que el fetch recibe