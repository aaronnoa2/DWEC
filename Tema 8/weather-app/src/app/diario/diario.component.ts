import { Component, OnInit } from '@angular/core';
import {WeatherApiService} from "../weather-api.service";

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent implements OnInit {

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
        this.temperaturaMaxima = data.hourly.data["0"].apparentTemperature;
        this.humedad = data.hourly.data["0"].humidity;
        this.resumen = data.hourly.data["0"].summary;
        this.velocidad = data.hourly.data["0"].windSpeed;
        this.nubes = data.hourly.data["0"].cloudCover;
        this.lluvia = data.hourly.data["0"].precipProbability;
        this.relente = data.hourly.data["0"].dewPoint;
        this.presion = data.hourly.data["0"].pressure;

      });
  }

  ngOnInit() {
    this.conseguirDatos();
  }

}
