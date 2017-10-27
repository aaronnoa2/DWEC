function numeroGrande (numeros) {
    res = numeros.sort().pop();
    return res;
}

function numeroLargo(entrada) {
    arraisito = new Array(entrada.length);
    arraisito.sort(function (a,b){
        a.length - b.length
    });
    arraisito.pop();
}

function numeroPar(numeros) {
    res = numeros.filter(function (a) {
        a%2 == 0;
    });
    return res;
}

function numeroImpar(numeros) {
    res = numeros.filter(function (a) {
        a%2 == 1;
    })
    return res;
}


function contieneLaPalabra(palabras) {
    res = palabras.filter(function (a) {
        a.includes('is');
    });
    return res;
}

function TodosNumerosDivisibles(numeros) {
    res = numeros.filter(function (a) {
        a%3 != 0
    })
    return res;
}
