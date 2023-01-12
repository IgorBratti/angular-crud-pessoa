import { PessoaService } from './../services/pessoa.service';
import { Component, OnInit } from '@angular/core';

import { Pessoa } from 'src/app/shared';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  pessoas:Pessoa[] = [];

  constructor(private PessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    return this.PessoaService.listarTodos();
  }

  remover($event: any, pessoa: Pessoa): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a pessoa ${pessoa.nome}?`)){
      this.PessoaService.remover(pessoa.id!);
      this.pessoas = this.listarTodos();
    }
  }

}
