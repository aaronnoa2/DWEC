function crearTabla() {
    document.close();
    document.write('<table border="1" style="width:500px" id="limpiar">' + '<br>');
    for(let i = 0;i < 12;i++){
        document.write('<tr id="limpito">');
        for(let j = 0; j < 12; j++){
            document.write('<td onmousemove="pintar(event)" onclick="resetear(event)">' + '&nbsp;' + '</td>')
        }
    }
    document.write('</tr>');
    document.write('</table>');
    document.write('<button onclick="resetAll()">Click me Senpai</button>')

}

function pintar(celda) {
    if(event.altKey)
        celda.target.style.backgroundColor = 'blue';
    if(event.ctrlKey) {
        celda.target.style.backgroundColor = 'red';
    }
}

function resetear(celda) {
    celda.target.style.backgroundColor = 'white';
}

function resetAll() {
    crearTabla();
}

addEventListener('load',crearTabla);