// Crear el elemento de audio usando JavaScript
const audio = new Audio('Yumetourou.mp3'); // Reemplaza con la ruta de tu archivo

// Hacer que el audio se reproduzca automáticamente y en bucle
audio.autoplay = true;
audio.loop = true;

// Controlar la reproducción del audio al cargar la página
window.addEventListener('load', () => {
    audio.play();
    console.log('Audio funcionando');
});