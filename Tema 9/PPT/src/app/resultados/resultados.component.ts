import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService} from "../chat.service";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit, OnDestroy {

  constructor(private chat: ChatService) { }

  ganador = '';
  resultado;

  ngOnInit() {
    this.resultado = this.chat.resultado().subscribe(data => {
      this.ganador = data;
      console.log(data + 'Jugador que ha ganado ya asignado');
    })
  }

  ngOnDestroy(){
    this.resultado.unsubscribe();
  }
}
