import Entrada from "../io/entrada";
import Cliente from "../models/Cliente";
import Update from "./Update";

export default class UpdateCliente extends Update {
  private clientes: Array<Cliente>;
  private entrada: Entrada;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public atualizar(): void {
    console.log(
      `\n=================== Atualização Cliente ===================`
    );
    let cpf = this.entrada.receberTexto(
      `Insira o Cpf do Cliente a ser atualizado: `
    );
    let cliente = this.clientes.find(
      (cliente) => cliente.getCPF.getValor == cpf
    );

    if (cliente) {
      let novoNome = this.entrada.receberTexto("Insira o novo Nome: ");
      let novoNomeSocial = this.entrada.receberTexto(
        "Insira o novo Nome Social: "
      );
      cliente.nome = novoNome;
      cliente.nomeSocial = novoNomeSocial;
      console.log(`O cliente ${cliente.nome} foi atualizado com sucesso!\n`);
    } else {
      console.log("Cliente não encontrado\n");
    }
  }
}
