document.addEventListener("DOMContentLoaded", () => {
    // Creamos el objeto de audio mediante JavaScript
    const musica = new Audio("Happy.mp3");
    musica.volume = 0.6
    musica.loop = true; // Para que se repita en bucle

    const playBtn = document.getElementById("playBtn");

    playBtn.addEventListener("click", () => {
        // Reproducimos la música y manejamos posibles restricciones del navegador
        musica.play()
            .then(() => {
                playBtn.textContent = "¡Felicidades!";
                playBtn.disabled = opcional = true; // Opcional: desactiva el botón tras hacer clic
            })
            .catch(error => {
                console.log("Error al reproducir el audio: ", error);
            });
    });
});