export class Endereco {
  constructor(
    public id?: number,
    public rua?: string,
    public numero: number=0,
    public bairro?: string,
    public cep?: string,
    public cidade?: string,
    public estado?: string,
    public residencial?: boolean) {

  }
}
