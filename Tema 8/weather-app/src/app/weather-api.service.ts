import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class WeatherApiService {



  constructor(private http: HttpClient) {
  }

  lat;
  lng;

  peticion(lat, lng): Observable<any> {
    this.lat = lat;
    this.lng = lng;
    return this.http.get('https://api.darksky.net/forecast/eab743b023c603d863769be37137fb1e/' + lat + ',' + lng + '?lang=es');
  }

  obtenerCoordenadas(ciudad): Observable<any> {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + ciudad + '&key=AIzaSyCULU3jC-yIfnSFcFSxfcnyzWv4XKtrMQM')
  }
}
