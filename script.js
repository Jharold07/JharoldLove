const main_img = document.querySelector('.main_img')
const thumbnails = document.querySelectorAll('.thumbnail')


thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        this.classList.add('active')
        main_img.src= this.src
    })
})

// Función para abrir un video de YouTube en una nueva ventana
function abrirVideo(videoUrl) {
    window.open(videoUrl, '_blank');
}

// Asignar la función a cada botón
document.getElementById('openVideoBtn1').addEventListener('click', function() {
    abrirVideo('https://youtu.be/ixZ_3A5jzk0?si=m6tmCwWNB4Uejbyk');
});

document.getElementById('openVideoBtn2').addEventListener('click', function() {
    abrirVideo('https://open.spotify.com/playlist/0Sa5u2RlcQISQYyzUn74QV?si=7f2db92441bb412a');
});