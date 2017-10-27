function posRaton() {
    posX = event.clientX;
    posY = event.clientY;
    console.log(posX,posY);
}

addEventListener('mousemove',posRaton);