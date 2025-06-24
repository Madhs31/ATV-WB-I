import Entrada from "../io/entrada";
import Cliente from "../models/Cliente";
import Delete from "./Delete";

export default class DeleteCliente extends Delete {
  private clientes: Array<Cliente>;
  private entrada: Entrada;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public excluir(): void {
    console.log(`\nInicio Exclusão Cliente`);
    let cpf = this.entrada.receberTexto(
      "Digite o CPF do cliente que será excluido: "
    );
    let index = this.clientes.findIndex(
      (cliente) => cliente.getCPF.getValor === cpf
    );

    if (index !== -1) {
      this.clientes.splice(index, 1);
      console.log(`Cliente com CPF ${cpf} foi excluído com sucesso!\n`);
    } else {
      console.log(`Cliente com o CPF ${cpf} não encontrado.\n`);
    }
  }
}
