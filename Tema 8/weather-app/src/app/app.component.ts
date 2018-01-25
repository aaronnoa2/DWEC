import { Component, OnInit } from '@angular/core';
import {WeatherApiService} from './weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _Observable: WeatherApiService) {
  }

  conseguirdatos() {
    this._Observable.exportarObservable().subscribe(
      data => {
        console.log(data);
      });
  }

  cambiarDatos() {
    this._Observable.cambiarDatos();
  }

  ngOnInit() {
    this.conseguirdatos();
    this.cambiarDatos();

  }
}
