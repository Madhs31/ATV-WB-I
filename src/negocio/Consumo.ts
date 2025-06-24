import Entrada from "../io/entrada";
import Cliente from "../models/Cliente";
import Produto from "../models/Produto";
import Servico from "../models/Servico";

export default class Consumo {
  private clientes: Array<Cliente>;
  private produtos: Array<Produto>;
  private servicos: Array<Servico>;
  private entrada: Entrada;

  constructor(
    clientes: Array<Cliente>,
    produtos: Array<Produto>,
    servicos: Array<Servico>
  ) {
    this.clientes = clientes;
    this.produtos = produtos;
    this.servicos = servicos;
    this.entrada = new Entrada();
  }

  public consumir() {
    console.log(`\nRegistro de Consumo`);
    let cpf = this.entrada.receberTexto(
      "Insira o CPF do Cliente que consumiu: "
    );
    let cliente = this.clientes.find(
      (cliente) => cliente.getCPF.getValor == cpf
    );

    if (cliente) {
      console.log(`\nConsumido`);
      console.log("1 - Produto");
      console.log("2 - Serviço");
      console.log("0 - Voltar\n");

      let opcaoConsumo = this.entrada.receberNumero(
        `Insira o que foi consumido pelo cliente (${cliente.nome}): `
      );

      switch (opcaoConsumo) {
        case 1:
          let idConsumoProd = this.entrada.receberTexto(
            "Insira o ID do produto consumido: "
          );
          let produtoConsumido = this.produtos.find(
            (produto) => produto.getId == idConsumoProd
          );
          let qntConsumoProd = parseInt(
            this.entrada.receberTexto(
              `Insira a quantidade do Produto: "${produtoConsumido?.nome}" consumido: `
            )
          );

          if (produtoConsumido) {
            for (let i = 0; i < qntConsumoProd; i++) {
              produtoConsumido.vendas++;
              cliente.consumirProduto(produtoConsumido);
            }
            console.log(
              `Produto ${produtoConsumido.nome} adicionado ao cliente ${cliente.nome}`
            );
          } else {
            console.log("Produto nao encontrado. :(");
          }
          break;
        case 2:
          let idConsumoServico = this.entrada.receberTexto(
            "Insira o ID do Serviço consumido: "
          );
          let servicoConsumido = this.servicos.find(
            (servico) => servico.getId == idConsumoServico
          );
          let qntConsumoServico = parseInt(
            this.entrada.receberTexto(
              `Insira a quantidade desse serviço consumido pelo cliente (${cliente.nome}): `
            )
          );

          if (servicoConsumido) {
            for (let i = 0; i < qntConsumoServico; i++) {
              servicoConsumido.vendas++;
              cliente.consumirServico(servicoConsumido);
            }
            console.log(
              `Produto ${servicoConsumido.nome} adicionado ao cliente ${cliente.nome}`
            );
          } else {
            console.log("Servico nao encontrado");
          }
          break;

        case 0:
          break;
        default:
          console.log(`Opção (${opcaoConsumo}) não entendida :(`);
          break;
      }
    } else {
      console.log("Cliente não encontrado");
    }
  }
}
