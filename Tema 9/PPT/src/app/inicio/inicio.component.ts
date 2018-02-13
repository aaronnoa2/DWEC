import { Component, OnInit } from '@angular/core';
import {ChatService} from "../chat.service";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: string;

  constructor(private chat: ChatService) {}

  enviarUsuario(){
    this.chat.meterUsuario(this.usuario);
  }

  cerrarPopUp(){
    $('#ModalNombreUsuario').modal('hide');
    this.enviarUsuario();
  }

  comprobarUsuario(){
    if(!this.chat.usuario || this.usuario == ''){
      $('#ModalNombreUsuario').modal('show');
    }
  }

  ngOnInit() {
    this.comprobarUsuario();
    $('#ModalNombreUsuario').on('hidde.bs.modal', () => {
      console.log('salta hide');
      this.comprobarUsuario();
    });
  }
}





