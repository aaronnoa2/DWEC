import { Component, OnInit } from '@angular/core';
import { ChatService} from "../chat.service";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private chat: ChatService) { }

  ganador = '';

  ngOnInit() {
    this.chat.resultado().subscribe(data => {
      this.ganador = data;
      console.log(data + 'Jugador que ha ganado ya asignado');
    })
  }
}
