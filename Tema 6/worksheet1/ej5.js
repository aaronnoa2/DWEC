function remitente() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("Remitente").innerHTML = this.responseText;
        }
    };
    httpRequest.open('GET', 'remitente.txt', true);
    httpRequest.send();
}

function correo() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("Correo").innerHTML = this.responseText;
        }
    };
    httpRequest.open('GET', 'correo.txt', true);
    httpRequest.send();
}

setInterval(function () {
    remitente();
    correo();
},5000);
