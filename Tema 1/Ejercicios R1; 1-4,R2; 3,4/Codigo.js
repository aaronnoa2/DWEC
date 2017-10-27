var a;
var b;
var c;
a = 1;
b = 2;
c = a+b;

mensaje = "Hola Mundo!Qué fácil es incluir 'comillas simples' y “comillas dobles”";

alert(mensaje) // Muestra una notificación en la página web

console.log('El valor de sumar ' + a + '+' + b + ' es igual a ' + c);

// Relacion 2 Ejercicio 3
var radio = 4;
const pi = 3.14;
var circunferencia = (2 * pi * radio);

document.write("</br>" + "Un radio de " + radio + " haria un circunferencia de " + circunferencia);


// Relación 2 Ejercicio 4
var celsius;
var fahrenheit;
celsius = 100;
fahrenheit = (celsius*9)/5 + 32;
document.write("</br>" + celsius + " grados celsius son " + fahrenheit + " grados fahrenheit");

// Relación 2 Ejercicio 4 pero con función

function celsiusTF(a){
    let fahrenheit = (a * 9) / 5 + 32;
    return fahrenheit;
}


function fahrenheitTC(a){
    let celsius = (a - 32) / 1.8;
    return celsius
}

function calcCircunference(a){
     return (2 * 3,14 * a);
}

function caclArea(a){
    return (a * a * 3,14);
}

console.log(caclArea(5))

