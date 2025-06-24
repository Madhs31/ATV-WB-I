import Cliente from "./Cliente";
import Produto from "./Produto";
import Servico from "./Servico";
import { clientesPop, produtosPop, servicosPop } from "../resources/data/dados";

class Empresa {
  private clientes: Array<Cliente>;
  private produtos: Array<Produto>;
  private servicos: Array<Servico>;

  constructor() {
    this.clientes = [];
    this.produtos = [];
    this.servicos = [];
  }

  public popular(): void {
    this.clientes.push(...clientesPop);
    this.produtos.push(...produtosPop);
    this.servicos.push(...servicosPop);
  }

  public get getClientes() {
    return this.clientes;
  }

  public get getProdutos() {
    return this.produtos;
  }

  public get getServicos() {
    return this.servicos;
  }
}

export default Empresa;
