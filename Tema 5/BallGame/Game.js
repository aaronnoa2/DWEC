window.onload =function() {
    bola = document.getElementById('ball');
    sentidox = true;
    sentidoy = true;
};

function getx() {
    return(bola.getAttribute('cx'));
}


function gety() {
    return(bola.getAttribute('cy'));
}


function moverpelota(){
    comprobarSentido();
    if(sentidox) {
        bola.setAttribute('cx', parseInt(bola.getAttribute('cx')) + 1);
        moverpelotaY();
    }

    else {
        bola.setAttribute('cx', parseInt(bola.getAttribute('cx')) - 1);
        moverpelotaY();
    }
}


function moverpelotaY() {
    if(sentidoy)
        bola.setAttribute('cy',parseInt(bola.getAttribute('cy')) + 1);

    if(sentidoy === false)
        bola.setAttribute('cy',parseInt(bola.getAttribute('cy')) - 1);
}


function comprobarSentido(){
    if(getx() > 1455)
        sentidox = false;

    if(getx() < 0)
        sentidox = true;

    if (gety() < 0)
        sentidoy = true;

    if (gety() > 750)
        sentidoy = false;
}


function movimiento() {
    setInterval(moverpelota,1);
}

movimiento();