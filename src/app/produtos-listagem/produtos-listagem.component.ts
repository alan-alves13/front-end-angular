import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.component.html',
  styleUrls: ['./produtos-listagem.component.css']
})
export class ProdutosListagemComponent implements OnInit {
   

   produtos: Produto[] = [];
   constructor(private servico: ProdutoService){}
   ngOnInit(): void {
     this.servico.getProduto().subscribe({
       next: (produtos: Produto[]) => this.produtos = produtos,
       error: (erro) => console.log(erro),
       complete: () => console.log('Requisicao finalizada')
     });
   }

}
