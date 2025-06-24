import Produto from "../models/Produto";
import Listagem from "./Listagem";

export default class ListagemProduto extends Listagem {
  private produtos: Array<Produto>;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
  }

  public listar(): void {
    console.log("\nListagem de todos os Produtos");
    this.produtos.forEach((produto) => {
      console.log("ID: " + produto.getId);
      console.log("Nome: " + produto.nome);
      console.log("Preço: " + produto.preco);
      console.log("Vendas: " + produto.vendas);
      console.log("\n \n");
    });
  }
}
