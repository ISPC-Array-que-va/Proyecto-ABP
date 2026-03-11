//<-- AQUÍ cargaremos el Navbar/Footer

// Función para cargar HTML en un contenedor
function loadComponent(id, path) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// Cargamos el Navbar y el Footer automáticamente
loadComponent('navbar-placeholder', 'components/navbar.html');
loadComponent('footer-placeholder', 'components/footer.html');