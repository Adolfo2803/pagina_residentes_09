// Menú 3: Acordeón
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.menu3 .acordeon-header');
    const enlaces = document.querySelectorAll('.menu3 .acordeon-content a');
    const resultado = document.getElementById('resultado3');
    
    // 1. Atrapamos el formulario nuevo que hicimos en el HTML
    const formulario = document.getElementById('miFormulario');

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

    // Click en los enlaces internos (Sección 1 y 2)
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            resultado.textContent = `Has seleccionado: ${enlace.dataset.item}`;
        });
    });

    if(formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); // Esto evita que la página parpadee y se recargue de golpe al enviar
            
            // Sacamos lo que escribiste en la cajita de texto
            const valorNombre = document.getElementById('nombre').value; 
            
            // Si lo dejaste en blanco, te avisa Si escribiste algo o no 
            if(valorNombre.trim() === '') {
                resultado.textContent = "Ey no hay nada en el formulario.";
            } else {
                resultado.textContent = `probando el formulario, ${valorNombre}! que Pro.`;
            }
            
            formulario.reset(); 
        });
    }
});