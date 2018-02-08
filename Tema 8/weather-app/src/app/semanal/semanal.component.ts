import { Component, OnInit } from '@angular/core';
import {WeatherApiService} from "../weather-api.service";

@Component({
  selector: 'app-semanal',
  templateUrl: './semanal.component.html',
  styleUrls: ['./semanal.component.css']
})
export class SemanalComponent implements OnInit {

  constructor(public servicio: WeatherApiService) {
  }

  datos = [];
  temperaturaMaxima;
  temperaturaMinima;
  humedad;
  resumen;
  velocidad;
  nubes;
  lluvia;
  relente;
  presion;
  lat;
  lng;

  conseguirDatos() {
    this.servicio.peticion(this.servicio.lat, this.servicio.lng).subscribe(
      data => {
        this.datos = data;
        console.log(this.datos);
        this.temperaturaMaxima = data.daily.data["0"].apparentTemperatureHigh;
        this.temperaturaMinima = data.daily.data["0"].apparentTemperatureLow;
        this.humedad = data.daily.data["0"].humidity;
        this.resumen = data.daily.data["0"].summary;
        this.velocidad = data.daily.data["0"].windSpeed;
        this.nubes = data.daily.data["0"].cloudCover;
        this.lluvia = data.daily.data["0"].precipProbability;
        this.relente = data.daily.data["0"].dewPoint;
        this.presion = data.daily.data["0"].cloudCover.pressure

      });
  }

  ngOnInit() {
    this.conseguirDatos();
  }

}

