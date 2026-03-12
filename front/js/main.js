// front/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('mascotas')) {
        cargarMascotas();
    }
});

async function cargarMascotas() {
    const container = document.getElementById('mascotas-container');
    
    try {
        const response = await fetch('/api/mascotas');
        const mascotas = await response.json();

        container.innerHTML = ''; // Limpiamos el cargando...

        mascotas.forEach(pet => {
            container.innerHTML += `
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 border-0 shadow-sm custom-card">
                        <img src="img/mascotas/${pet.nombre_m.toLowerCase()}.png" class="card-img-top p-3 rounded-5" onerror="this.src='https://via.placeholder.com/300x200?text=Perrito'">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${pet.nombre_m}</h5>
                            <p class="card-text text-muted small">${pet.raza_m} • En ${pet.nombre_est}</p>
                            <p class="card-text">${pet.descripcion_m}</p>
                        </div>
                        <div class="card-footer bg-transparent border-0 pb-3">
                            <button class="btn btn-primary w-100 rounded-pill">Conocerme más</button>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error cargando mascotas:", error);
    }
}
