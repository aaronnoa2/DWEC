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
        imagensita.style.top = xEy[1]-(event.target.height)/2 + "px";
        imagensita.style.left = xEy[0]-(event.target.width)/2 + "px";
    }
}


var click = false;