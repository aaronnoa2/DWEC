function soltarRaton() {
    posX = event.clientX;
    posY = event.clientY;
    return(posX,posY);
}

function reposicionarImagen() {
    window.addEventListener('mouseup',moverImagen);

}

function moverImagen() {
    let xEy =soltarRaton();
    var imagensita = document.getElementById('imagen');
    imagensita.style.bottom = xEy[1] + "px";
    imagensita.style.right = xEy[0] + "px";
}


