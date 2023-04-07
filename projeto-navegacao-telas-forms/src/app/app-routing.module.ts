import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCadastroComponent } from './componentes/form-cadastro/form-cadastro.component';
import { CardsComponent } from './componentes/cards/cards.component';

const routes: Routes = [
  {path: 'card', component: CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
