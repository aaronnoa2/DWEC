function informacionTexto(arg) {
    entrada = arg;
    patronM =/[A-Z]/g;
    patronm =/[a-z]/g;
    if (entrada.match(patronM) && entrada.match(patronm)){
        console.log('Hay mayusculas y minusculas');
        return true
    }
    if (entrada.match(patronM) &&!(entrada.match(patronm))) {
        console.log('Hay solo mayusculas');
    }

    if (entrada.match(patronm) &&! (entrada.match(patronM))){
        console.log('Solo hay minusculas');
    }
}

informacionTexto('HOLA QUE HACE');