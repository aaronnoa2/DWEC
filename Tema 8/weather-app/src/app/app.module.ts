import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { WeatherApiService } from './weather-api.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RouterModule, Routes } from '@angular/router';
import { DiarioComponent } from './diario/diario.component';
import { SemanalComponent } from './semanal/semanal.component';

const appRoutes: Routes = [
  { path: 'inicio', component: BodyComponent },
  { path: 'diario',      component: DiarioComponent },
  {
    path: 'semanal',
    component: SemanalComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  { path: '**', component: BodyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DiarioComponent,
    SemanalComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
