import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import * as io from 'socket.io-client'

@Injectable()
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }


  public listo() {
    this.socket.emit('listo');
  }

  public sendMessage(message) {
    this.socket.emit('chat message', message);
  }

  public elegirCarta(carta) {
    this.socket.emit('elegirCarta', carta);
  }

  public empezar = () => {
    return Observable.create((observer) => {
      this.socket.on('empezar', (data) => {
        observer.next(data);
      })
    })
  };

  public acabar = () => {
    return Observable.create((observer) => {
      this.socket.on('acabar', (data) => {
        observer.next(data);
      })
    })
  };

  public habilitar = () => {
    return Observable.create((observer) => {
      this.socket.on('habilitar', (data) => {
        console.log('ojooooo');
        observer.next(data);
      })
    })
  };

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('chat message', (message) => {
        observer.next(message);
      })
    })
  }
}
