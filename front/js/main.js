//Lógica de cada página

// Función para obtener las mascotas desde Python
async function obtenerMascotas() {
    try {
        // 1. Hacemos la petición a la API de Python
        const respuesta = await fetch('http://localhost:5000/api/mascotas');
        
        // 2. Convertimos la respuesta en un formato que JS entienda (JSON)
        const datos = await respuesta.json();
        
        // 3. Ahora que tenemos los datos, los mostramos en la consola
        console.log("Lista de mascotas recibida:", datos);
        
        // Aquí llamarías a otra función para dibujar las "Cards" en el HTML
    } catch (error) {
        console.error("Hubo un error al traer los datos:", error);
    }
}