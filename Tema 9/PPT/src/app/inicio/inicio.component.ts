import { Component, OnInit } from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private chat: ChatService) { }

  salaDeJuego(){
    this.chat.salaDeJuego();
  }

  ngOnInit() {
  }

}
