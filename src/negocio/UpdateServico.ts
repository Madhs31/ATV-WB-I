import Entrada from "../io/entrada";
import Servico from "../models/Servico";
import Update from "./Update";

export default class UpdateServico extends Update {
  private servicos: Array<Servico>;
  private entrada: Entrada;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
    this.entrada = new Entrada();
  }

  public atualizar(): void {
    console.log(
      `\n=================== Inicio Atualização Serviço ===================`
    );
    let id = this.entrada.receberTexto(
      "Insira o ID do Serviço a ser atualizado: "
    );
    let servico = this.servicos.find((servico) => servico.getId == id);

    if (servico) {
      let novoNome = this.entrada.receberTexto(
        "Insira o novo Nome do Serviço: "
      );
      let novoPreco = this.entrada.receberTexto(
        "Insira o novo Preco do Serviço: "
      );
      servico.nome = novoNome;
      servico.preco = novoPreco;
      console.log(`O Serviço ${servico.nome} foi atualizado com sucesso!\n`);
    } else {
      console.log(`Serviço ${id} não encontrado\n`);
    }
  }
}
