let boton = document.querySelector('#boton-cambio');
let video = document.querySelector('#video1');
let arrayVideos = ['videos/video-1.mp4', 'videos/video-2.mp4', 'videos/video-3.mp4']

// Función para cambiar el video en cada pulsación del botón
boton.addEventListener('click', () =>{
    let src = video.getAttribute('src');
    // console.log(src);
    switch (src){
        case 'videos/video-1.mp4':
            video.setAttribute('src', arrayVideos[1]);
            break;
        case 'videos/video-2.mp4':
            video.setAttribute('src', arrayVideos[2]);
            break;
        case 'videos/video-3.mp4':
            video.setAttribute('src', arrayVideos[0]);
            break;
    }
});