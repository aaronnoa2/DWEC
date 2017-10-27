function soltarRaton() {
    posX = event.clientX;
    posY = event.clientY;
    return[posX,posY];
}

function reposicionarImagen() {
    click = !click;

}

function moverImagen() {
    if (click) {
        let xEy = soltarRaton();
        var imagensita = document.getElementById('imagen');
        imagensita.style.top = xEy[1] + "px";
        imagensita.style.left = xEy[0] + "px";
    }
}


var click = false;