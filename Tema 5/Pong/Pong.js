jugadores = 0;
class Jugador {

    constructor(posx, posy, keyArriba, keyAbajo) {
        this.spawnx = posx;
        this.spawny = posy;
        this.puntaArriba = posy;
        this.puntaAbajo = posy + 200;
        this.posiciony = posy;
        this.score = 0;
        this.id = 'barra' + jugadores;
        this.keyArriba = keyArriba;
        this.keyAbajo = keyAbajo;
        this.velocidad = 10;
        this.dibujarJugador();
    }

    dibujarJugador() {
        jugadores += 1;
        document.getElementById('canvas').innerHTML += '<rect id="' + this.id + '" height="200" width="20" fill="red" x="' + this.spawnx + '" y="' + this.spawny + '"></rect>';
    }


    moverJugador(event) {
        if (event.keyCode === this.keyArriba) {
            this.posiciony -= this.velocidad;
            this.puntaArriba -= this.velocidad;
            this.puntaAbajo -= this.velocidad;
            document.getElementById(this.id).setAttribute('y', this.posiciony);
        }
        if (event.keyCode === this.keyAbajo) {
            this.posiciony += this.velocidad;
            this.puntaAbajo += this.velocidad;
            this.puntaArriba += this.velocidad;
            document.getElementById(this.id).setAttribute('y', this.posiciony);
        }
    }
}

class Ball {
    constructor(velo = 4, rad = 10) {
        this.speed = velo;
        this.radio = rad;
        this.right = false;
        this.down = false;
        this.x = 500;
        this.y = 500;
        this.dibujarPelota();
        this.initMovement();
    }

    dibujarPelota() {
        document.getElementById('canvas').innerHTML += '<circle id="bola" fill="red" r="' + this.radio + '" cx="500" cy="500"></circle>';
    }

    initMovement() {
        this.movInt = setInterval(() => {
            this.x += (this.right ? this.speed : -this.speed);
            this.y += (this.down ? this.speed : -this.speed);
            document.getElementById('bola').setAttribute('cx', this.x);
            document.getElementById('bola').setAttribute('cy', this.y);
            this.checkBorderCollision();
            this.checkPlayerCollision();
        }, 1000 / 60)
    }

    checkBorderCollision() {
        if (this.x >= 1455 - this.radio) {
            this.x = 500;
            this.y = 500;
            jugador1.score += 1;
            document.getElementById('equipo1').innerHTML = jugador1.score;
        }
        else if (this.x <= this.radio) {
            this.x = 500;
            this.y = 600;
            jugador2.score += 1;
            document.getElementById('equipo2').innerHTML = jugador2.score;
        }
        if (this.y >= 750 - this.radio) this.down = false;
        else if (this.y <= this.radio) this.down = true;
    }

    checkPlayerCollision() {
        if (this.x < 120 && (this.y > jugador1.puntaArriba && this.y < jugador1.puntaAbajo))
            this.right = !this.right;

        if (this.x > 1350 && (this.y > jugador2.puntaArriba && this.y < jugador2.puntaAbajo))
            this.right = !this.right;
    }
}

window.onload = function () {
    jugador1 = new Jugador(100, 100, 90, 88);
    jugador2 = new Jugador(1350, 300, 78, 77);
    pelota = new Ball();
    window.addEventListener('keydown', (event) => {
        jugador1.moverJugador(event);
        jugador2.moverJugador(event);
    });
};