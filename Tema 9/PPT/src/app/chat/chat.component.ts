import { Component, OnInit } from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string;
  messages: string[] = [];

  constructor(private chat: ChatService){

  }

  sendMessage(){
    this.chat.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit(){
    this.chat
      .getMessages()
      .subscribe((message:string) => {
        this.messages.push(message);
      })
  }
}
