import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosListagemComponent } from './produtos-listagem/produtos-listagem.component';

const routes: Routes = [
  
  {path: 'produtoslistagem', component: ProdutosListagemComponent},
  {path:  '', redirectTo: '/produtoslistagem', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
