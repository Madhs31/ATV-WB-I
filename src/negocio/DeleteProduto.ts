import Entrada from "../io/entrada";
import Produto from "../models/Produto";
import Delete from "./Delete";

export default class DeleteProduto extends Delete {
  private produtos: Array<Produto>;
  private entrada: Entrada;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
    this.entrada = new Entrada();
  }

  public excluir(): void {
    console.log(`\nInicio Exclusão Produt`);
    let id = this.entrada.receberTexto(
      `Digite o ID do Produto a ser excluido: `
    );
    let index = this.produtos.findIndex((produto) => produto.getId == id);

    if (index !== -1) {
      this.produtos.splice(index, 1);
      console.log(`Produto: ${id} excluido com sucesso`);
    } else {
      console.log(`Produto: ${id} não encontrado`);
    }
  }
}
