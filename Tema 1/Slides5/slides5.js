// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

function anything(...a){
    var resultado = a[0];
    for (var i = 1, l = a.length; i < l ; i++){
        resultado = resultado + a[i];
    }
console.log(resultado);
}

anything('hola','que hase',1);

//Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.

function addOnlyNums(...b){
    var suma = 0;
    for (var i = 0,l = b.length; i < l; i++){
        if (typeof b[i] == 'number'){
            suma = suma + b[i];
        }
        else{
            console.log('Hay algo que no es un número');
            }
    }
console.log(suma);
}
    
addOnlyNums(2,3,5,'a','b','c');

//Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).

function combineTwoArrays(array1,array2){
    finalArray = [...array1,...array2];
    console.log(finalArray);
}

var perretes = ['perrete1','perrete2','perrete3'];
var gatetes = ['gatete1','gatete2','gatete3'];

combineTwoArrays(perretes,gatetes);

//Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments.


function onlyUniques(...c){
    var unicos = [];
    for (var i = 0,l = c.length; i < l ; i++){
        for (var e = 0, le = unicos.length; e < l; e++){
            if (!unicos.includes(c[i])){
                unicos.unshift(c[i]);
            }
            else{
                console.log('Hay algun elemento repetido');
            }
        }
        }
    console.log(unicos);
}
    
onlyUniques('a','a',1,1);