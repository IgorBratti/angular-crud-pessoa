import { Endereco } from './../../shared/models/endereco.model';
import { Injectable } from '@angular/core';

// chave para o LocalStorage
const LS_CHAVE: string = "pessoas"

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  // metodo listarTodos para acessar localStorage na chave que defini
  listarTodos(): Endereco[] {
    // pessoas é uma string JSON contendo uma lista de pessoas
    const enderecos = localStorage [LS_CHAVE];
    // caso não tenha nada na lista ira retornar undefined, por isso a necessidade da condicional "[]",
    // caso contrario é feito um parse da lista de pessoas
    return enderecos ? JSON.parse(enderecos) : [];
  }

  // metodo inserir recebe um objeto do tipo pessoa
  inserir(endereco: Endereco): void {
    //Obtém/retorna a lista completa de pessoas
    const enderecos = this.listarTodos();
    // Seta o ID único
    // Como eu não tenho o ID uso um ID único Timestamp "new Date().getTime()" para não precisar gerenciar
    endereco.id = new Date().getTime();
    // push para inserir a nova pessoa
    enderecos.push(endereco);
    // para armazenar a nova pessoa no localStorage
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  // metodo buscarPorId passa um id numerico e ele pode retornar uma pessoa ou undefined(se nao encontrar pessoa)
  buscarPorId(id: number): Endereco | undefined {
    // para descobrir se tem uma pessoa ou não
    // Obtém a lista completa de pessoas
    const enderecos: Endereco[] = this.listarTodos();

    // Efetua a busca
    // find() retorna o primeiro elemento da lista que satisfaz a condição, caso contrario undefined
    return enderecos.find(endereco => endereco.id === id);
  }

  // Metodo atualizar recebe uma pessoa como parâmentro
  atualizar(endereco: Endereco): void {
    // Obtém/retorna a lista completa de pessoas
    const enderecos: Endereco[] = this.listarTodos();
    // forEach varre todos os elementos do arrau e chama a Arrow Function definida que no caso tem 3 parâmentros
    // obj = Objeto atual, index = Índice do objeto atual, objs = array completo

    enderecos.forEach( (obj, index, objs) => {
      if (endereco.id === obj.id) {
        objs[index] = endereco
      }
    } );
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  // Metodo remover recebe um id da pessoa que quero remover
  remover(id: number): void {
    // Retorno a lista de todas as pessoas
    // Feito com let para poder ser alterada
    let enderecos: Endereco[] = this.listarTodos();

    // filter(): retorna a mesma lista, com os registros que satisfazem a condição, isto é,
    // cujo id pe diferente do passado na função
    enderecos = enderecos.filter(endereco => endereco.id !== id);
    //  Transforma em string e armazena no localStorage
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }
}
