import Entrada from "../io/entrada";
import Cliente from "../models/Cliente";
import Produto from "../models/Produto";
import Servico from "../models/Servico";
import Listagem from "./Listagem";

export default class ListagensFeatures extends Listagem {
  private clientes: Array<Cliente>;
  private produtos: Array<Produto>;
  private servicos: Array<Servico>;
  private entrada: Entrada;

  constructor(
    clientes: Array<Cliente>,
    produtos: Array<Produto>,
    servicos: Array<Servico>
  ) {
    super();
    this.clientes = clientes;
    this.produtos = produtos;
    this.servicos = servicos;
    this.entrada = new Entrada();
  }

  public listar(): void {}

  public listagem10ConsumoQnt(): void {
    console.log(
      `\nListagem Top 10 Cliente (Consumo em Quantidade)`
    );
    console.log(`\nComparar Consumo em:`);
    console.log("1 - Produto");
    console.log("2 - Serviço");
    console.log("0 - Voltar\n");

    let opcaoListTop10 = this.entrada.receberNumero(
      "Insira uma opção para comparar o consumo: "
    );
    switch (opcaoListTop10) {
      case 1:
        let clienteOrdenadosProd = this.clientes
          .map((cliente) => {
            return {
              clienteNome: cliente.nome,
              clienteCpf: cliente.getCPF.getValor,
              totalProdConsumido: cliente.getQntProdConsumido,
            };
          })
          .sort((a, b) => b.totalProdConsumido - a.totalProdConsumido)
          .slice(0, 10);
        console.log(
          `\nTop 10 - Produtos`
        );
        let rankProd = 0;
        if (clienteOrdenadosProd.length == 0) {
          console.log("Nenhum produto consumido ainda!");
        } else {
          clienteOrdenadosProd.forEach((cliente) => {
            rankProd++;
            console.log(`${rankProd}º Nome: ${cliente.clienteNome}`);
            console.log(`   CPF: ${cliente.clienteCpf}`);
            console.log(
              `   Quantidade de Produtos: ${cliente.totalProdConsumido}`
            );
          });
        }
        break;
      case 2:
        let clienteOrdenadosServ = this.clientes
          .map((cliente) => {
            return {
              clienteNome: cliente.nome,
              clienteCpf: cliente.getCPF.getValor,
              totalServConsumido: cliente.getQntServConsumido,
            };
          })
          .sort((a, b) => b.totalServConsumido - a.totalServConsumido)
          .slice(0, 10);
        console.log(
          `\nTop 10 - Serviços`
        );
        let rankServ = 0;
        if (clienteOrdenadosServ.length == 0) {
          console.log("Nenhum servico consumido ainda!");
        } else {
          clienteOrdenadosServ.forEach((cliente) => {
            rankServ++;
            console.log(`${rankServ}º Nome: ${cliente.clienteNome}`);
            console.log(`   CPF: ${cliente.clienteCpf}`);
            console.log(
              `   Quantidade de Servicos: ${cliente.totalServConsumido}`
            );
          });
        }
        break;
      case 0:
        break;
      default:
        console.log(`Opção (${opcaoListTop10}) não entendida :c`);
    }
  }

  public listagemGenero(): void {
    console.log(
      `\nListagem Cliente por Genêro`
    );
    console.log(`\nSelecione um genêro:`);
    console.log("1 - Masculino");
    console.log("2 - Feminino");
    console.log("0 - Voltar\n");

    let opcaoGenero = this.entrada.receberNumero("Insira opcao: ");
    switch (opcaoGenero) {
      case 1:
        let cliGeneroMasc = this.clientes.filter(
          (cliente) => cliente.genero == "M"
        );
        console.log(`\nLista Masculina\n`);
        if (cliGeneroMasc.length == 0) {
          console.log(
            "Nenhum Cliente do genero Masculino foi cadastrado ainda"
          );
        } else {
          cliGeneroMasc.forEach((cliente) => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`CPF: ${cliente.getCPF.getValor}`);
            console.log(`Genêro: ${cliente.genero}`);
            console.log(
              `Total de Produtos Consumido: ${cliente.getQntProdConsumido}`
            );
            console.log(
              `Total de Servicos Consumido: ${cliente.getQntServConsumido}\n`
            );
          });
        }
        break;
      case 2:
        let cliGeneroFem = this.clientes.filter(
          (cliente) => cliente.genero == "F"
        );

        console.log(`\nLista Feminina\n`);
        if (cliGeneroFem.length == 0) {
          console.log("Nenhum Cliente do genero Feminino foi cadastrado ainda");
        } else {
          cliGeneroFem.forEach((cliente) => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`CPF: ${cliente.getCPF.getValor}`);
            console.log(`Genêro: ${cliente.genero}`);
            console.log(
              `Total de Produtos Consumido: ${cliente.getQntProdConsumido}`
            );
            console.log(
              `Total de Servicos Consumido: ${cliente.getQntServConsumido}\n`
            );
          });
        }
        break;
      case 0:
        break;
      default:
        console.log(`Opção (${opcaoGenero}) não entendida :c`);
    }
  }

  public listagemMaisConsumidos(): void {
    console.log(
      `\nListagem Geral + Consumidos`
    );
    console.log(`\nEscolha um para listar:`);
    console.log("1 - Produto");
    console.log("2 - Serviço");
    console.log("0 - Voltar\n");

    let opcaoMaisConsumidos = this.entrada.receberNumero("Insira uma opcao: ");
    switch (opcaoMaisConsumidos) {
      case 1:
        if (this.produtos.length == 0) {
          console.log("\nParece que nenhum produto foi consumido ainda.");
        } else {
          console.log(
            `\nListagem Geral Produtos + Consumidos`
          );
          let prodMaisConsumido = this.produtos
            .map((produto) => {
              return {
                idProd: produto.getId,
                prodNome: produto.nome,
                prodQntVnd: produto.vendas,
              };
            })
            .sort((a, b) => b.prodQntVnd - a.prodQntVnd);
          let rankProd = 0;
          prodMaisConsumido.forEach((produto) => {
            rankProd++;
            console.log(`${rankProd}º - ID: ${produto.idProd}`);
            console.log(`      Nome: ${produto.prodNome}`);
            console.log(`      Quantidade de Consumos: ${produto.prodQntVnd}`);
          });
        }
        break;
      case 2:
        if (this.servicos.length == 0) {
          console.log("\nParece que nenhum Servico foi consumido ainda.");
        } else {
          console.log(
            `\nListagem Geral Servico + Consumidos`
          );
          let servMaisConsumido = this.servicos
            .map((servico) => {
              return {
                idServ: servico.getId,
                servNome: servico.nome,
                servQntVnd: servico.vendas,
              };
            })
            .sort((a, b) => b.servQntVnd - a.servQntVnd);
          let rankServ = 0;
          servMaisConsumido.forEach((servico) => {
            rankServ++;
            console.log(`${rankServ}º - ID: ${servico.idServ}`);
            console.log(`      Nome: ${servico.servNome}`);
            console.log(`      Quantidade de Consumos: ${servico.servQntVnd}`);
          });
        }
        break;
      case 0:
        break;
      default:
        console.log(`Opção (${opcaoMaisConsumidos}) não entendida :c`);
    }
  }

  public listagemConsumoGenero(): void {
    console.log(
      `\nListagem Produtos e Servicos por Genero`
    );
    console.log(`\nEscolha um genero:`);
    console.log("1 - Masculino");
    console.log("2 - Feminino");
    console.log("0 - Voltar\n");

    let opcaoGenero = this.entrada.receberNumero("Insira sua opcao: ");
    let cliGeneroMasc = this.clientes.filter(
      (cliente) => cliente.genero == "M"
    );
    let cliGeneroFem = this.clientes.filter((cliente) => cliente.genero == "F");

    switch (opcaoGenero) {
      case 1:
        let contagemProdutosMas: { [nomeProduto: string]: number } = {};
        cliGeneroMasc.map((cliente) => {
          cliente.getProdutosConsumidos.forEach((produto) => {
            if (contagemProdutosMas[produto.nome]) {
              contagemProdutosMas[produto.nome] += 1;
            } else {
              contagemProdutosMas[produto.nome] = 1;
            }
          });
        });

        let contagemServMas: { [nomeServico: string]: number } = {};
        cliGeneroMasc.map((cliente) => {
          cliente.getServicosConsumidos.forEach((servico) => {
            if (contagemServMas[servico.nome]) {
              contagemServMas[servico.nome] += 1;
            } else {
              contagemServMas[servico.nome] = 1;
            }
          });
        });

        console.log(
          `\nProdutos Mais Consumidos pelo genero Masculino`
        );
        let rankProdMasc = 0;
        let arrayContagemProdMasc = Object.entries(contagemProdutosMas);
        if (arrayContagemProdMasc.length == 0) {
          console.log("Parece que nao há nenhum produto consumido");
        } else {
          arrayContagemProdMasc.sort((a, b) => b[1] - a[1]);
          arrayContagemProdMasc.forEach((produto) => {
            rankProdMasc += 1;
            console.log(`${rankProdMasc}º Nome do Produto: ${produto[0]}`);
            console.log(`   Quantidade de Consumo: ${produto[1]}\n`);
          });
        }

        console.log(
          `\nServicos Mais Consumidos pelo genero Masculino`
        );
        let rankServMasc = 0;
        let arrayContagemServMasc = Object.entries(contagemServMas);
        if (arrayContagemServMasc.length == 0) {
          console.log("Parece que nao há nenhum servico consumido");
        } else {
          arrayContagemServMasc.sort((a, b) => b[1] - a[1]);
          arrayContagemServMasc.forEach((servico) => {
            rankServMasc += 1;
            console.log(`${rankServMasc}º Nome do Produto: ${servico[0]}`);
            console.log(`   Quantidade de Consumo: ${servico[1]}\n`);
          });
        }
        break;

      case 2:
        let contagemProdFem: { [nomeProduto: string]: number } = {};
        cliGeneroFem.map((cliente) => {
          cliente.getProdutosConsumidos.forEach((produto) => {
            if (contagemProdFem[produto.nome]) {
              contagemProdFem[produto.nome] += 1;
            } else {
              contagemProdFem[produto.nome] = 1;
            }
          });
        });

        let contagemServFem: { [nomeServico: string]: number } = {};
        cliGeneroFem.map((cliente) => {
          cliente.getServicosConsumidos.forEach((servico) => {
            if (contagemServFem[servico.nome]) {
              contagemServFem[servico.nome] += 1;
            } else {
              contagemServFem[servico.nome] = 1;
            }
          });
        });

        console.log(
          `\nProdutos Mais Consumidos pelo genero Feminino`
        );
        let rankFemProd = 0;
        let arrayContagemProdFem = Object.entries(contagemProdFem);
        if (arrayContagemProdFem.length == 0) {
          console.log("Parece que nao há nenhum produto consumido");
        } else {
          arrayContagemProdFem.sort((a, b) => b[1] - a[1]);
          arrayContagemProdFem.forEach((produto) => {
            rankFemProd += 1;
            console.log(`${rankFemProd}º Nome do Produto: ${produto[0]}`);
            console.log(`   Quantidade de Consumo: ${produto[1]}\n`);
          });
        }

        console.log(
          `\nServicos Mais Consumidos pelo genero Feminino`
        );
        let rankFemServ = 0;
        let arrayContagemServFem = Object.entries(contagemServFem);
        if (arrayContagemServFem.length == 0) {
          console.log("Parece que nao há nenhum servico consumido");
        } else {
          arrayContagemServFem.sort((a, b) => b[1] - a[1]);
          arrayContagemServFem.forEach((servico) => {
            rankFemServ += 1;
            console.log(`${rankFemServ}º Nome do Servico: ${servico[0]}`);
            console.log(`   Quantidade de Consumo: ${servico[1]}\n`);
          });
        }
        break;

      case 0:
        break;
      default:
        console.log(`Opção (${opcaoGenero}) não entendida :c`);
    }
  }

  public listagem10MenosConsumoQnt(): void {
    console.log(
      `\nListagem Top 10 Cliente (Menor Consumo em Quantidade)`
    );
    console.log(`\nComparar Consumo em:`);
    console.log("1 - Produto");
    console.log("2 - Serviço");
    console.log("0 - Voltar\n");

    let opcaoListTop10 = this.entrada.receberNumero(
      "Insira uma opcao para comparar o consumo: "
    );
    switch (opcaoListTop10) {
      case 1:
        let clienteOrdenadosProd = this.clientes
          .map((cliente) => {
            return {
              clienteNome: cliente.nome,
              clienteCpf: cliente.getCPF.getValor,
              totalProdConsumido: cliente.getQntProdConsumido,
            };
          })
          .sort((a, b) => a.totalProdConsumido - b.totalProdConsumido)
          .slice(0, 10);
        console.log(
          `\nLista Top 10 - Menos consumiram Produtos`
        );
        let rankProd = 0;
        if (clienteOrdenadosProd.length == 0) {
          console.log("Nenhum produto Consumido ainda!");
        } else {
          clienteOrdenadosProd.forEach((cliente) => {
            rankProd++;
            console.log(`${rankProd}º Nome: ${cliente.clienteNome}`);
            console.log(`   CPF: ${cliente.clienteCpf}`);
            console.log(
              `   Quantidade de Produtos: ${cliente.totalProdConsumido}`
            );
          });
        }
        break;
      case 2:
        let clienteOrdenadosServ = this.clientes
          .map((cliente) => {
            return {
              clienteNome: cliente.nome,
              clienteCpf: cliente.getCPF.getValor,
              totalServConsumido: cliente.getQntServConsumido,
            };
          })
          .sort((a, b) => a.totalServConsumido - b.totalServConsumido)
          .slice(0, 10);
        console.log(
          `\nLista Top 10 - Menos consumiram Servicos`
        );
        let rankServ = 0;
        if (clienteOrdenadosServ.length == 0) {
          console.log("Nenhum servico Consumido ainda!");
        } else {
          clienteOrdenadosServ.forEach((cliente) => {
            rankServ++;
            console.log(`${rankServ}º Nome: ${cliente.clienteNome}`);
            console.log(`   CPF: ${cliente.clienteCpf}`);
            console.log(
              `   Quantidade de Servicos: ${cliente.totalServConsumido}`
            );
          });
        }
        break;
      case 0:
        break;
      default:
        console.log(`Opção (${opcaoListTop10}) não entendida :c`);
    }
  }

  public listagem5ConsumoValor(): void {
    console.log(
      `\nListagem Top 5 Cliente (Consumo em Valor)`
    );

    function pegarValorTotal(
      produtos: Array<Produto>,
      servicos: Array<Servico>
    ): number {
      let valorTotal = 0;
      produtos.forEach((produto) => {
        valorTotal += parseInt(produto.preco) * produto.vendas;
      });
      servicos.forEach((servico) => {
        valorTotal += parseInt(servico.preco) * servico.vendas;
      });
      return valorTotal;
    }

    let clienteOrdenado = this.clientes
      .map((cliente) => {
        return {
          nome: cliente.nome,
          cpf: cliente.getCPF,
          valorTotalConsumido: pegarValorTotal(
            cliente.getProdutosConsumidos,
            cliente.getServicosConsumidos
          ),
        };
      })
      .sort((a, b) => b.valorTotalConsumido - a.valorTotalConsumido)
      .slice(0, 5);

    let rank = 0;
    clienteOrdenado.forEach((cliente) => {
      rank++;
      console.log(`${rank}º - Nome: ${cliente.nome}`);
      console.log(`     CPF: ${cliente.cpf.getValor}`);
      console.log(
        `     Valor total de Consumos: ${cliente.valorTotalConsumido}`
      );
    });
  }
}
