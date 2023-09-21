let video = document.getElementById('video-container');
let tactil = document.getElementById('BgTactil');

window.onload = () => {
    video.classList.toggle('esconder');
}

function displayN(){
    const btnManos = document.getElementById('manos');
    btnManos.addEventListener('click', ()=>{
        video.classList.toggle('mostrar');
        tactil.classList.toggle('esconder');
        if(btnManos.textContent == 'Tactil'){
            btnManos.textContent = 'Manos';
        }else{
            btnManos.textContent = 'Tactil';
        }
    })
}

displayN();