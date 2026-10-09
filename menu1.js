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

            // Mostrar resultado con mensajes personalizados
            const mensajes = {
                inicio: "¡Bienvenido a nuestra página!",
                servicios: "Conoce todos los servicios que ofrecemos.",
                productos: "Explora nuestros productos disponibles.",
                contacto: "¡Gracias por visitarnos! Estamos para ayudarte."
            };

            resultado.textContent = mensajes[enlace.dataset.item];
        });
    });
});