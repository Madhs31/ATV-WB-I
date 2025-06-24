import Entrada from "../io/entrada";
import Servico from "../models/Servico";
import Delete from "./Delete";

export default class DeleteServico extends Delete {
  private servicos: Array<Servico>;
  private entrada: Entrada;

  constructor(servico: Array<Servico>) {
    super();
    this.servicos = servico;
    this.entrada = new Entrada();
  }

  public excluir(): void {
    console.log(`\nInicio Exclusão Servicos`);
    let id = this.entrada.receberTexto(
      `Digite o ID do Serviço a ser excluido: `
    );
    let index = this.servicos.findIndex((servico) => servico.getId == id);

    if (index !== -1) {
      this.servicos.splice(index, 1);
      console.log(`Serviço: ${id} excluido com sucesso`);
    } else {
      console.log(`Serviço: ${id} não encontrado`);
    }
  }
}
