import {Component, OnInit} from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private chat: ChatService) {
  }

  message: string;
  username = this.chat.usuario;
  messages: string[] = [];

  sendMessage() {
    let data = {usuario: this.username, mensaje: this.message};
    console.log(this.username + ' Estamos en el chat');
    this.chat.sendMessage(data);
    this.message = '';
  }

  ngOnInit() {
    this.chat
      .getMessages()
      .subscribe((data) => {
        this.messages.push(data);
      })
  }
}
