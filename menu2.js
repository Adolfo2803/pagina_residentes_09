// Menú 2: Lateral desplegable
document.addEventListener('DOMContentLoaded', () => {
    const btnToggle = document.getElementById('toggleMenu2');
    const menu = document.getElementById('menu2');
    const enlaces = menu.querySelectorAll('ul li a');
    const resultado = document.getElementById('resultado2');

    // Abrir/cerrar menú
    btnToggle.addEventListener('click', () => {
        menu.classList.toggle('abierto');
        btnToggle.textContent = menu.classList.contains('abierto')
            ? '✖ Cerrar Menú'
            : '☰ Abrir Menú';
    });

    // Click en cada item
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            resultado.textContent = `Has seleccionado: ${enlace.dataset.item}`;

            // Opcional: cerrar menú al hacer click
            menu.classList.remove('abierto');
            btnToggle.textContent = '☰ Abrir Menú';
        });
    });
});