// Eventos de click abrir - cerrar de menu e iniciar sesion en dimenciones para moviles
function toggleContenedor(contenedor , abrir , cerrar){
    const contDesplegable = document.querySelector(contenedor);
    const abrirCont = document.querySelector(abrir);
    const cerrarCont = document.querySelector(cerrar);

    // Manejar el evento de clic para abrir
    abrirCont.addEventListener('click', function () {
        contDesplegable.style.display = 'block';
    });
    // Manejar el evento de clic para cerrar
    cerrarCont.addEventListener('click' , function(){
       contDesplegable.style.display = 'none';
   });

   
}
toggleContenedor('.cont-emergente' , '.abrir' , '.cerrar-menu');
toggleContenedor('.iniciar-sesion-fondo-black','.iniciar-sesion' , '.cont-cerrar');
toggleContenedor('.iniciar-sesion-fondo-black','.cont-iniciar-cuenta' , '.cont-cerrar');



// Función para gestionar el clic en "Ver más" y "Ver menos"
function setupToggle(toggleContainer, verMasClass, verMenosClass, contentClass) {
    // Selecciona los elementos relevantes dentro del contenedor dado
    const verMasBtn = toggleContainer.querySelector(verMasClass);
    const verMenosBtn = toggleContainer.querySelector(verMenosClass);
    const content = toggleContainer.querySelector(contentClass);

    // Función para mostrar el contenido y ocultar "Ver más"
    verMasBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        content.style.display = 'block'; // Muestra el contenido
        verMasBtn.style.display = 'none'; // Oculta el botón "Ver más"
    });

    // Función para ocultar el contenido y mostrar "Ver más"
    verMenosBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        content.style.display = 'none'; // Oculta el contenido
        verMasBtn.style.display = 'inline'; // Muestra el botón "Ver más"
    });
}

// Aplica la funcionalidad a cada contenedor correspondiente
document.addEventListener('DOMContentLoaded', function() {
    setupToggle(document.querySelector('.ubic-2'), '.ver-mas','.ver-menos', '.ubicacion-2');
    setupToggle(document.querySelector('.ubicacion-alquilar'), '.ver-mas', '.ver-menos', '.alquilar-2');
    setupToggle(document.querySelector('.propiedades'), '.ver-mas', '.ver-menos', '.propiedades-2');
});



// Selecciona todos los elementos que quieres animar
const elements = document.querySelectorAll('.text-sobre-remax, .text-sobre');

function animateOnScroll() {
  elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    // Si el elemento está visible en la pantalla, agrega la clase de animación
    if (position < screenHeight) {
      element.classList.add('active'); // Clase que activa la animación
    }
  });
}

// Ejecuta la función cuando se hace scroll
window.addEventListener('scroll', animateOnScroll);


