class Servico {
  private id: string;
  public nome: string;
  public preco: string;
  public vendas: number;

  constructor(id: string, nome: string, preco: string) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.vendas = 0;
  }

  public get getId() {
    return this.id;
  }
}

export default Servico;
