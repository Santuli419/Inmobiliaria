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

