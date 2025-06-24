import Entrada from "../io/entrada";
import Servico from "../models/Servico";
import Cadastro from "./Cadastro";

export default class CadastroServico extends Cadastro {
  private servicos: Array<Servico>;
  private entrada: Entrada;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    console.log(`\nCadastro Serviços`);
    let id = this.entrada.receberTexto(`ID do Serviço: `);
    let nome = this.entrada.receberTexto(`Nome do Serviço: `);
    let preco = this.entrada.receberTexto(`Preço do Serviço: `);
    let servico = new Servico(id, nome, preco);
    this.servicos.push(servico);
    console.log(`Cadastro do Serviço: ${nome} Concluido! 🎉`);
  }
}
