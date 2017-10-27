// 1. What´s number is bigger
function greaterNum(a,b){
    if (a > b){
        return ("The greater number is " + a );
    }
    else{
        return ("The greater number is " + b);
    
    }
}

console.log(greaterNum(2,1));
console.log(greaterNum(5,1));

// 2. The World Translator

function helloWorld (idioma){
    switch (idioma){
        case 'en':
            console.log("Hello World");
            break;
        case 'es':
            console.log("Hola Mundo");
            break;
        case 'fr':
            console.log("Bonjour monde");
            break;
        default:
            console.log("Hello World");
            break;
                           }
}
helloWorld('es');


