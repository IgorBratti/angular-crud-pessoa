import { Pessoa } from './../../shared/models/pessoa.model';
import { Injectable } from '@angular/core';

// chave para o LocalStorage
const LS_CHAVE: string = "pessoas"

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  // metodo listarTodos para acessar localStorage na chave que defini
  listarTodos(): Pessoa[] {
    // pessoas é uma string JSON contendo uma lista de pessoas
    const pessoas = localStorage [LS_CHAVE];
    // caso não tenha nada na lista ira retornar undefined, por isso a necessidade da condicional "[]",
    // caso contrario é feito um parse da lista de pessoas
    return pessoas ? JSON.parse(pessoas) : [];
  }

  // metodo inserir recebe um objeto do tipo pessoa
  inserir(pessoa: Pessoa): void {
    //Obtém/retorna a lista completa de pessoas
    const pessoas = this.listarTodos();
    // Seta o ID único
    // Como eu não tenho o ID uso um ID único Timestamp "new Date().getTime()" para não precisar gerenciar
    pessoa.id = new Date().getTime();
    // push para inserir a nova pessoa
    pessoas.push(pessoa);
    // para armazenar a nova pessoa no localStorage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  // metodo buscarPorId passa um id numerico e ele pode retornar uma pessoa ou undefined(se nao encontrar pessoa)
  buscarPorId(id: number): Pessoa | undefined {
    // para descobrir se tem uma pessoa ou não
    // Obtém a lista completa de pessoas
    const pessoas: Pessoa[] = this.listarTodos();

    // Efetua a busca
    // find() retorna o primeiro elemento da lista que satisfaz a condição, caso contrario undefined
    return pessoas.find(pessoa => pessoa.id === id);
  }

  // Metodo atualizar recebe uma pessoa como parâmentro
  atualizar(pessoa: Pessoa): void {
    // Obtém/retorna a lista completa de pessoas
    const pessoas: Pessoa[] = this.listarTodos();
    // forEach varre todos os elementos do arrau e chama a Arrow Function definida que no caso tem 3 parâmentros
    // obj = Objeto atual, index = Índice do objeto atual, objs = array completo

    pessoas.forEach( (obj, index, objs) => {
      if (pessoa.id === obj.id) {
        objs[index] = pessoa
      }
    } );
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  // Metodo remover recebe um id da pessoa que quero remover
  remover(id: number): void {
    // Retorno a lista de todas as pessoas
    // Feito com let para poder ser alterada
    let pessoas: Pessoa[] = this.listarTodos();

    // filter(): retorna a mesma lista, com os registros que satisfazem a condição, isto é,
    // cujo id pe diferente do passado na função
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);
    //  Transforma em string e armazena no localStorage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }
}
