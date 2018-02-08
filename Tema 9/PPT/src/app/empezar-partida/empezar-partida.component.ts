import { Component, OnInit } from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-empezar-partida',
  templateUrl: './empezar-partida.component.html',
  styleUrls: ['./empezar-partida.component.css']
})
export class EmpezarPartidaComponent implements OnInit {
  habilitado = false;
  link = "/empezarPartida";
  constructor(private chat: ChatService) { }

  listo(){
    /*console.log('esta habilitado');
    this.chat.listo();
    this.deshabilitarBoton();*/
    this.empiezaPartida();
  }

  deshabilitarBoton(){
    this.habilitado = true;
  }

  empiezaPartida(){
    this.link = "/ppt";
  }

  ngOnInit() {
  }

}
