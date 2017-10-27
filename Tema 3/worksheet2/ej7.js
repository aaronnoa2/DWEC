function ceroArray() {
    array = [];
    for (let i = 0; i < 10; i++){
        array[i] = 0;
    }
    console.log(array);
}

function anadirUno() {
    array1 = [0,0,0,0,0];
    for (let e = 0;e < array1.length;e++){
        array1[e]++;
    }
    console.log(array1)
}

function separarPorComas() {
    array = [1,2,3,4,5,6];
    let separado = '';
    for (let i = 0; i < array.length;i++){
        separado += array[i] + ' ';
    }
    console.log(separado);
}
ceroArray();
anadirUno();
separarPorComas();
