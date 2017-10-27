function lanzamientoDado() {
    return (Math.floor(Math.random()*6 ) + 1);
}

function sumarResultados(lanzamientos) {
    arrayExterior = new Array(6).fill(new Array(6).fill(0));
    for (let i = 0; i < lanzamientos;i++){
        arrayExterior[lanzamientoDado() - 1 ][lanzamientoDado() -1]++;
    }
    console.log(arrayExterior);
}

sumarResultados(36000);