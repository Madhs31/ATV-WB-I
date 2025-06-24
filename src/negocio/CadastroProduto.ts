import Entrada from "../io/entrada";
import Produto from "../models/Produto";
import Cadastro from "./Cadastro";

export default class CadastroProduto extends Cadastro {
  private produtos: Array<Produto>;
  private entrada: Entrada;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    console.log(`\nCadastro Produto`);
    let id = this.entrada.receberTexto(`ID do Produto: `);
    let nome = this.entrada.receberTexto(`Nome do Produto: `);
    let preco = this.entrada.receberTexto(`Preço do Produto: `);
    let produto = new Produto(id, nome, preco);
    this.produtos.push(produto);
    console.log(`Cadastro do produto: ${nome} Concluido! 🎉`);
  }
}
