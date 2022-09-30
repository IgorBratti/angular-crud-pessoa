import { PessoaService } from './../services/pessoa.service';
import { Component, OnInit } from '@angular/core';

import { Pessoa } from 'src/app/shared/models/pessoa.model';

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
   // return this.PessoaService.listarTodos();

   return [
    new Pessoa(1, "Igor", 30),
    new Pessoa(2, "amanda", 32),
    new Pessoa(3, "Rodrigo", 54),
    new Pessoa(4, "Luiz", 23)
   ]
  }

}
