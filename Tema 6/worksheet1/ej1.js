function mostrar() {
    console.log('entra');
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    httpRequest.open('GET', 'Pagina.txt', true);
    httpRequest.send();
}

