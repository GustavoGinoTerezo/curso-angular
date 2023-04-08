import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCadastroComponent } from './componentes/form-cadastro/form-cadastro.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { FormGerenciamentoComponent } from './componentes/form-gerenciamento/form-gerenciamento.component';

const routes: Routes = [
  {path: '', component: FormCadastroComponent},
  {path: 'card', component: CardsComponent},
  {path: 'gerenciamento', component: FormGerenciamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
