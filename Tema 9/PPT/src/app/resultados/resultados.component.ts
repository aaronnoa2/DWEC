import { Component, OnInit } from '@angular/core';
import { ChatService} from "../chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private chat: ChatService, private router:Router) { }

  ganador = 'Alguno';

  ngOnInit() {
  }

}
