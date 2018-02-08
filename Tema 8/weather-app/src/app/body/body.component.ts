import {Component, OnInit} from '@angular/core';
import {WeatherApiService} from "../weather-api.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor(public servicio: WeatherApiService) {
  }

  ciudad = '';
  datos = [];
  temperatura;
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
    this.servicio.peticion(37.2124648, -3.5487084).subscribe(
      data => {
        this.datos = data;
        console.log(this.datos);
        this.temperatura = data.currently.apparentTemperature;
        this.humedad = data.currently.humidity;
        this.resumen = data.currently.summary;
        this.velocidad = data.currently.windSpeed;
        this.nubes = data.currently.cloudCover;
        this.lluvia = data.currently.precipProbability;
        this.relente = data.currently.dewPoint;
        this.presion = data.currently.pressure

      });
  }

  cogerCiudad() {
    this.servicio.obtenerCoordenadas(this.ciudad).subscribe(
      data => {
        this.tiempoCiudad(data.results["0"].geometry.location.lat, data.results["0"].geometry.location.lng);
      }
    );

  }

  tiempoCiudad(lat, lng) {
    this.servicio.peticion(lat, lng).subscribe(
      data => {
      }
    )
  }

  ngOnInit() {
    this.conseguirDatos();
  }

}
