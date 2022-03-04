import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './site/home/home.component';
import { BolsaMedicinaComponent } from './site/bolsa-medicina/bolsa-medicina.component';
import { IsencaoTaxaComponent } from './site/isencao-taxa/isencao-taxa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ObrigadoComponent } from './site/obrigado/obrigado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BolsaMedicinaComponent,
    IsencaoTaxaComponent,
    ObrigadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
