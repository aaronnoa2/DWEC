function links() {
    let enlaceGoogle = 0;
    let todoslinks = document.getElementsByTagName('a');
    console.log('Enlaces totales:' + todoslinks.length);
    console.log('Direccion del penultimo enlace:' + todoslinks[todoslinks.length - 2].href);
    for(let i = 0;i < todoslinks.length;i++){
        if (todoslinks[i].href == 'https://www.google.es/'){
            enlaceGoogle ++;
        }
    }
    console.log(enlaceGoogle + ' Enlace de google');
    let parrafos = document.getElementById('parrafo2').getElementsByTagName('a');
    console.log(parrafos.length + ' enlace');

}

links();