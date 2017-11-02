function guardarUsuario() {
    nombreUsuario = document.getElementById('UserName').value;
    document.cookie = 'username=' + nombreUsuario + ';expires='+ tiempoExpireString;
    console.log(document.cookie);
    alert('Hola ' + nombreUsuario);
}

function borrarcookies() {
    document.cookie = 'username=; expires="Sun, 15 Jul 2012 00:00:01"' ;
}

window.onload = function cookie(){
    if (document.cookie){
        cookieCargada = document.cookie;
        cookiesplit = cookieCargada.split(' ');
        alert('Hola ' + cookiesplit[0]);
        document.write("<input type='submit' onclick='borrarcookies()' id='borrar'>");
        document.cookie = ' ';
    }
    else{
        document.write("UserName:<input type='text' id='UserName'/>");
        document.write("<input type='submit' onclick='guardarUsuario()'>");
        usuario = document.getElementById('UserName');
    }
};

var tiempoExpire = new Date();
tiempoExpire.setSeconds(5000);
var tiempoExpireString = tiempoExpire.toUTCString();