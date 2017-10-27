function palindromo(cadena) {
    cadenaminusculas = cadena.toLowerCase();
    cadenabreak = cadenaminusculas.replace(' ','');
    cadenasplit = cadenabreak.split(' ');
    cadenareverse = cadenasplit.reverse();
    if (cadenareverse == cadenasplit){
        console.log('Son palindromos');
    }
}

palindromo('abc');