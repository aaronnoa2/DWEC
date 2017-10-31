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
    tiempoExpire = new Date();
    tiempoExpire.setSeconds(300);
    tiempoExpireString = tiempoExpire.toUTCString();
    nombreUsuario = document.getElementById('UserName').value;
    document.cookie = nombreUsuario +' '+ tiempoExpireString;
    alert('Hola ' + nombreUsuario);
    console.log(document.cookie);
}

function borrarcookies() {
    document.cookie = ' ';
}

