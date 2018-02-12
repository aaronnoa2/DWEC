import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


import { AppComponent } from './app.component';
import {ChatService} from './chat.service';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ChatComponent } from './chat/chat.component';
import { JuegoComponent } from './juego/juego.component';
import { EmpezarPartidaComponent } from './empezar-partida/empezar-partida.component';
import { ResultadosComponent } from './resultados/resultados.component';


const appRoutes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'empezarPartida', component: EmpezarPartidaComponent },
  { path: 'ppt',      component: JuegoComponent},
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  { path: '**', component: InicioComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ChatComponent,
    JuegoComponent,
    EmpezarPartidaComponent,
    ResultadosComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
