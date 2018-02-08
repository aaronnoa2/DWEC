import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import * as io from 'socket.io-client'

@Injectable()
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message){
    this.socket.emit('chat message',message);
  }

  public elegirCarta(carta){
    this.socket.emit('elegirCarta',carta);
    console.log(carta + 'estamos en el service')
  }

  public getMessages = () => {
    return Observable.create((observer) =>{
      this.socket.on('chat message',(message) =>{
        observer.next(message);
      })
    })
  }
}
