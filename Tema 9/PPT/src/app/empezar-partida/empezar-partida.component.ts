import { Component, OnInit } from '@angular/core';
import {ChatService} from "../chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-empezar-partida',
  templateUrl: './empezar-partida.component.html',
  styleUrls: ['./empezar-partida.component.css']
})
export class EmpezarPartidaComponent implements OnInit {
  habilitado = false;
  link = "/empezarPartida";
  constructor(private chat: ChatService, private router: Router) { }

  listo(){
    this.chat.listo();
    this.deshabilitarBoton();
  }

  deshabilitarBoton(){
    this.habilitado = true;
    console.log(this.habilitado);
  }

  ngOnInit() {
    this.chat.empezar().subscribe(data => {
      this.router.navigate(['/ppt']);
    });

    this.chat.resultado().subscribe(data => {
      this.router.navigate(['/resultados']);
    });

    this.chat.acabar().subscribe(data => {
      this.router.navigate(['/inicio']);
    });
  }
}
