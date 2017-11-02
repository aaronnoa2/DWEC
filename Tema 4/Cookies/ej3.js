function guardarUsuario() {
    nombreUsuario = document.getElementById('UserName').value;
    document.cookie = 'username=' + nombreUsuario + ';expires='+ tiempoExpireString;
    alert('Hola ' + nombreUsuario);
    console.log(document.cookie);
}

function borrarcookies() {
    document.cookie = 'username=; expires="Sun, 15 Jul 2012 00:00:01"' ;
}

window.onload = function cookie(){
    if (document.cookie){
        cookieCargada = document.cookie;
        cookiesplit = cookieCargada.split(' ');
        alert('Hola ' + cookiesplit[0]);
        document.write("<input type='submit' onclick='borrarcookies()' id='borrar'>")
    }
    else{
        document.write("UserName:<input type='text' id='UserName'/>");
        document.write("<input type='submit' onclick='guardarUsuario()'>");
        usuario = document.getElementById('UserName');
        usuario.style.fontSize = String(prompt('Tamaño de fuente'));
        usuario.style.backgroundColor = String(prompt('Color de fondo'));
    }
};

var tiempoExpire = new Date();
tiempoExpire.setSeconds(5000);
var tiempoExpireString = tiempoExpire.toUTCString();

addEventListener("unload",borrarcookies);