import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { WeatherApiService } from './weather-api.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
