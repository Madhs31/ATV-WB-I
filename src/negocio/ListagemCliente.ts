import Cliente from "../models/Cliente";
import Listagem from "./Listagem";

export default class ListagemCliente extends Listagem {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public listar(): void {
    console.log(
      "\nLista de todos os Clientes\n"
    );
    this.clientes.forEach((cliente) => {
      console.log(`Nome: ` + cliente.nome);
      console.log(`Nome social: ` + cliente.nomeSocial);
      console.log(`Genero: ` + cliente.genero);
      console.log(`CPF: ` + cliente.getCPF.getValor);
      console.log(`RG: ` + cliente.getRG.getValor);
      console.log(`Telefone: ` + cliente.getTelefone);
      console.log("Cadastrado em: " + cliente.getDataCadastro);
      console.log(
        `Quantidade de Produtos Consumidos: ${cliente.getQntProdConsumido}`
      );
      console.log(
        `Quantidade de Servicos Consumidos: ${cliente.getQntServConsumido}`
      );
      console.log("\n\n");
    });
  }
}
