function lanzamientoDado() {
    return Math.floor(Math.random()*5 );
}

function sumarResultados(lanzamientos) {
    array = new Array(6).fill(0);
    for (let i = 0; i < lanzamientos;i++){
        array[(lanzamientoDado()+lanzamientoDado())]++;
    }
}
sumarResultados(36000);