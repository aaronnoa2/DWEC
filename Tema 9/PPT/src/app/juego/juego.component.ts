import { Component, OnInit, OnDestroy } from '@angular/core';
import {ChatService} from "../chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit,OnDestroy {
  deshabilitado = false;
  puntuacion1 = 0;
  puntuacion2 = 0;
  jugador1;
  jugador2;
  empezar;
  habilitar;
  jugadores;
  resultado;
  id;
  constructor(private chat: ChatService, private router:Router) {

    this.id= Math.random();
  }

  elegirCarta(carta){
    console.log(this.id + 'elegir carta');
    this.chat.elegirCarta(carta);
    this.deshabilitado = true;
  }

  ngOnInit() {

      this.empezar =  this.chat.empezar().subscribe(data => {
        this.deshabilitado = data;
      });

      this.habilitar = this.chat.habilitar().subscribe(data => {
        this.deshabilitado = data;
      });

      this.jugadores = this.chat.jugadores().subscribe(data => {
        this.jugador1 = data.jugadorPrimero;
        this.jugador2 = data.jugadorSegundo;
      });

      this.resultado = this.chat.resultado().subscribe(data => {
        this.router.navigate(['/resultados']);
      });

      this.chat.puntos().subscribe(data => {
        this.puntuacion1 = data.puntuacionPrimero;
        this.puntuacion2 = data.puntuacionSegundo;
      });
  }

  ngOnDestroy(){
    this.empezar.unsubscribe();
    this.jugadores.unsubscribe();
    this.habilitar.unsubscribe();
    this.resultado.unsubscribe();
    console.log(this.id + 'limpia los suscribes');
  }
}
