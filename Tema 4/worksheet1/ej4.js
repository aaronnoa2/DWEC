function crearTabla() {
    document.write('<table border="1" style="width:500px">' + '<br>');
    for(let i = 0;i < 12;i++){
        document.write('<tr>');
        for(let j = 0; j < 12; j++){
            document.write('<td onmousemove="pintar(event)">' + '&nbsp;' + '</td>')
        }
    }
    document.write('</tr>');
    document.write('</table>');

}

function pintar(celda) {
    if(event.altKey)
        celda.target.style.backgroundColor = 'blue';
    if (event.ctrlKey){
        celda.target.style.backgroundColor = 'red';
    }

}

addEventListener('load',crearTabla);
