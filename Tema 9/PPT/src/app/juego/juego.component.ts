import { Component, OnInit } from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  deshabilitado = false;
  constructor(private chat: ChatService) { }

  elegirCarta(carta){
    this.chat.elegirCarta(carta);
    this.deshabilitado = true;
  }

  ngOnInit() {
    this.chat.empezar().subscribe(data => {
      this.deshabilitado = data;
    });
    this.chat.habilitar().subscribe(data => {
      this.deshabilitado = data;
    })
  }
}
