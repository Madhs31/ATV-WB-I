import Servico from "../models/Servico";
import Listagem from "./Listagem";

export default class ListagemServico extends Listagem {
  private servicos: Array<Servico>;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
  }

  public listar(): void {
    console.log("\nListagem de todos os Serviços");
    this.servicos.forEach((servico) => {
      console.log("ID: " + servico.getId);
      console.log("Nome: " + servico.nome);
      console.log("Preço: " + servico.preco);
      console.log("Vendas: " + servico.vendas);
      console.log("\n \n");
    });
  }
}
