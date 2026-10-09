// Menú 1: Horizontal - marcar item activo y mostrar resultado
document.addEventListener('DOMContentLoaded', () => {
    const enlaces = document.querySelectorAll('.menu1 ul li a');
    const resultado = document.getElementById('resultado1');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();

            // Quitar activo de todos
            enlaces.forEach(el => el.classList.remove('activo'));

            // Agregar activo al seleccionado
            enlace.classList.add('activo');

            // Mostrar resultado
            resultado.textContent = `Has seleccionado: ${enlace.dataset.item}`;
        });
    });
});