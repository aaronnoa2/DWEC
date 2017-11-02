window.onload = function cookie(){
    usuario = document.getElementById('UserName');
    if (document.cookie){
        cookieCargada = document.cookie;
        cookiesplit = cookieCargada.split(' ');
        alert('Hola ' + cookiesplit[0]);
        document.write("<input type='submit' onclick='borrarcookies()' id='borrar'>")
    }
    else{
        document.write("UserName:<input type='text' id='UserName'/>");
        document.write("<input type='submit' onclick='guardarUsuario()'>");
    }
};

function guardarUsuario() {
    nombreUsuario = document.getElementById('UserName').value;
    document.cookie = 'username=' + nombreUsuario + ';expires='+ tiempoExpireString;
    alert('Hola ' + nombreUsuario);
    console.log(document.cookie);
}

function borrarcookies() {
    document.cookie = 'username=; expires="Sun, 15 Jul 2012 00:00:01"' ;
}

var tiempoExpire = new Date();
tiempoExpire.setSeconds(5000);
var tiempoExpireString = tiempoExpire.toUTCString();

