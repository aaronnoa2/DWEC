import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService} from "../chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit, OnDestroy {

  constructor(private chat: ChatService, private router:Router) { }

  ganador = '';
  resultado;
  acabar;

  ngOnInit() {
    this.resultado = this.chat.resultado().subscribe(data => {
      this.ganador = data;
      console.log(data + 'Jugador que ha ganado ya asignado');
    });

    this.ganador = this.chat.ganador;

    this.acabar = this.chat.acabar().subscribe(data => {
      this.router.navigate(['/inicio']);
    });
  }

  ngOnDestroy(){
    this.resultado.unsubscribe();
    this.acabar.unsubscribe();
  }
}
