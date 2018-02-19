import {Component, OnInit, OnDestroy} from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy{

  constructor(private chat: ChatService) {
  }

  getMessages;
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
    this.getMessages = this.chat.getMessages().subscribe((data) => {
        this.messages.push(data);
      })
  }

  ngOnDestroy(){
    this.getMessages.unsubscribe();
  }
}
