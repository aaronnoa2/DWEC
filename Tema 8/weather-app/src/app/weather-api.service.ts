import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class WeatherApiService {
  datos = new Subject<any>();
  constructor(private http: HttpClient) { }

  exportarObservable() {
    return this.datos.asObservable();
  }

  cambiarDatos() {
    setTimeout(() => {this.datos.next(this.peticion())}, 3000);
  }


  peticion(): Observable<any> {
    return this.http.get('https://api.darksky.net/forecast/[key]/[latitude],[longitude]');
  }
}
