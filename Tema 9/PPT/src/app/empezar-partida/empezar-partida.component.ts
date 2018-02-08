import { Component, OnInit } from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-empezar-partida',
  templateUrl: './empezar-partida.component.html',
  styleUrls: ['./empezar-partida.component.css']
})
export class EmpezarPartidaComponent implements OnInit {

  constructor(private chat: ChatService) { }

  listo(){
    this.chat.listo();
    this.deshabilitarBoton()
  }

  deshabilitarBoton(){

  }

  ngOnInit() {
  }

}
