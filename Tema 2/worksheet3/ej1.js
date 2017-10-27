function invierteCadena(cadena) {
    var long = cadena.length;
    var cadenaInvertida = '';
    while (long >=0){
        cadenaInvertida = cadenaInvertida + cadena.charAt(long);
        long--;
    }
    return(cadenaInvertida);
}
invierteCadena('hola');

function inviertePalabras(cadena) {
    var algo = cadena.split(' ');
    var resultado = '';
    for (x = 0;x < algo.length;x++){
        resultado = resultado + ' ' + invierteCadena(algo[x]);
    }
    console.log(resultado);
}
inviertePalabras('hola perra ');

function encuentraPalabrasMasLarga(cadena) {
    var palabraFinal = '';
    var separadas = cadena.split(' ');
    for (x = 0;x < separadas.length;x++){
        if (palabraFinal.length < separadas[x].length){
            palabraFinal = separadas[x];
        }
    }
    console.log(palabraFinal);
}
encuentraPalabrasMasLarga('pene hola adios VIVAESPAÑA');

function filtraPalabrasMasLargas(cadena,minimo) {
    var palabramaslarga = [];
    var cadenaspliteada = cadena.split(' ');
    for (x = 0;x < cadenaspliteada.length; x++){
        if (cadenaspliteada[x] >= minimo){
            palabramaslarga = cadenaspliteada[x];
        }
    }
    console.log(encuentraPalabrasMasLarga());
}

function cadenaBienFormada(cadena) {
    var cadenaFinal = '';
    cadenasplitea = cadena.split(' ');
    primeraPalabra = cadenasplitea[0].charAt(0).toUpperCase()


}