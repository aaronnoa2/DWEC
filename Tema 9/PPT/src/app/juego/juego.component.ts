import { Component, OnInit, OnDestroy } from '@angular/core';
import {ChatService} from "../chat.service";

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
  entra = true;
  empezar;
  habilitar;
  jugadores;
  constructor(private chat: ChatService) { }

  elegirCarta(carta){
    this.chat.elegirCarta(carta);
    this.deshabilitado = true;
  }

  ngOnInit() {

    if(this.entra){
      console.log(this.entra, 'ha entrado');
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

      this.chat.puntos().subscribe(data => {
        console.log(data ,'Estos son los datos que llegan al ts');
        this.puntuacion1 = data.puntuacionPrimero;
        this.puntuacion2 = data.puntuacionSegundo;
      });
    this.entra = false;
    }


  }

  ngOnDestroy(){
    this.empezar.unsubscribe();
    this.jugadores.unsubscribe();
    this.habilitar.unsubscribe();
  }
}
