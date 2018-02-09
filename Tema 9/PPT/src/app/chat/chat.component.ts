import {Component, OnInit} from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string;
  username = 'Useeeeeeeeer';
  messages: string[] = [];


  constructor(private chat: ChatService) {

  }

  sendMessage() {
    let data = {usuario: this.username, mensaje: this.message};
    console.log('zanviao unmesnaje', data);
    this.chat.sendMessage(data);
    this.message = '';
  }

  ngOnInit() {
    this.chat
      .getMessages()
      .subscribe((data) => {
        console.log('callegao unmesnaje', data);
        this.messages.push(data);
      })
  }
}
