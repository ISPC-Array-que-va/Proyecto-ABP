//Solo la lógica para cambiar entre modo claro y oscuro.// 
// Usamos delegación de eventos porque el navbar se carga dinámicamente
document.addEventListener('click', function (event) {
    // Verificamos si lo que se clickeó es el botón de tema
    if (event.target && event.target.id === 'theme-btn') {
        
        // 1. Alternamos la clase en el body
        document.body.classList.toggle('dark-mode');

        // 2. Guardamos la preferencia para que no se pierda al recargar
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        console.log("Cambiando tema. ¿Oscuro?:", isDark);
    }
});

// Al cargar la página, verificamos si ya había una preferencia guardada
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});