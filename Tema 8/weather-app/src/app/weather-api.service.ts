import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  peticion(): Observable<any> {
    return this.http.get('https://api.darksky.net/forecast/eab743b023c603d863769be37137fb1e/37.1886273,-3.5907775');
  }
}
