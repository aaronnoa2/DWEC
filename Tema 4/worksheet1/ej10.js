function soltarRaton() {
    posX = event.clientX;
    posY = event.clientY;
    return[posX,posY];
}

function reposicionarImagen(imagen) {
    click = !click;
    lanzado = imagen.target
}

function moverImagen() {
    if (click) {
        let xEy = soltarRaton();
        lanzado.style.top = xEy[1] + "px";
        lanzado.style.left = xEy[0] + "px";
    }
}
var click = false;
var lanzado = 0;