import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolsaMedicinaComponent } from './site/bolsa-medicina/bolsa-medicina.component';
import { HomeComponent } from './site/home/home.component';
import { IsencaoTaxaComponent } from './site/isencao-taxa/isencao-taxa.component';
import { ObrigadoComponent } from './site/obrigado/obrigado.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'bolsaMedicina', component: BolsaMedicinaComponent},
  {path: 'isencaoTaxa', component: IsencaoTaxaComponent},
  {path: 'obrigado', component: ObrigadoComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
