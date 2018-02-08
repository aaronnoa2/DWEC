import { Component, OnInit } from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  constructor(private chat: ChatService) { }

  elegirCarta(carta){
    this.chat.elegirCarta(carta);
    console.log(carta + 'estamos en el ts')
  }

  ngOnInit() {
  }

}
