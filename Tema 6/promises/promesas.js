var promesa = new Promise(
    function (resolve, reject) {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
        if (this.readyState == 4){
            if (this.status == 200)
                resolve(this.responseText);
            else
                reject('algo fue mal');
        }};
        httpRequest.open('GET', 'Pagina.txt', true);
        httpRequest.send();
    }
);

var secumplira = function () {
    promesa.then(function (resuelto) {
        document.getElementById("demo").innerHTML = resuelto;
    }).catch(function (noresuelto) {
        console.log(noresuelto)
    })
};
