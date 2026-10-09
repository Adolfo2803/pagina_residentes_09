// Menú 3: Acordeón
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.menu3 .acordeon-header');
    const enlaces = document.querySelectorAll('.menu3 .acordeon-content a');
    const resultado = document.getElementById('resultado3');

    // Abrir/cerrar secciones del acordeón
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;

            // Cerrar todos los demás (comportamiento tipo acordeón)
            document.querySelectorAll('.menu3 .acordeon-item').forEach(el => {
                if (el !== item) el.classList.remove('activo');
            });

            // Alternar el actual
            item.classList.toggle('activo');
        });
    });

    // Click en los enlaces internos
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            resultado.textContent = `Has seleccionado: ${enlace.dataset.item}`;
        });
    });
});