let url = ['pajaro1.jpg','pajaro2.jpg','pajaro3.jpg','pajaro4.jpg'];
let urlcont = 0;

function next() {
    if(urlcont < url.length - 1){
        document.getElementById('mostrar').src = url[++urlcont];
    }
}

function prev() {
    if(urlcont > 0){
        document.getElementById('mostrar').src = url[--urlcont]
    }
}

