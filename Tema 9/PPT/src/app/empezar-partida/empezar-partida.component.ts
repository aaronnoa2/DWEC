import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatService} from "../chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-empezar-partida',
  templateUrl: './empezar-partida.component.html',
  styleUrls: ['./empezar-partida.component.css']
})
export class EmpezarPartidaComponent implements OnInit, OnDestroy {
  habilitado = false;
  link = "/empezarPartida";
  empezar;

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
      this.empezar = this.chat.empezar().subscribe(data => {
      this.router.navigate(['/ppt']);
    });


  }

  ngOnDestroy(){
    this.empezar.unsubscribe();
  }
}
