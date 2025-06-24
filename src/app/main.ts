import Entrada from "../io/entrada";
import Empresa from "../models/Empresa";
import UpdateCliente from "../negocio/UpdateCliente";
import UpdateProduto from "../negocio/UpdateProduto";
import UpdateServico from "../negocio/UpdateServico";
import CadastroCliente from "../negocio/CadastroCliente";
import CadastroProduto from "../negocio/CadastroProduto";
import CadastroServico from "../negocio/CadastroServico";
import Consumo from "../negocio/Consumo";
import DeleteCliente from "../negocio/DeleteCliente";
import DeleteProduto from "../negocio/DeleteProduto";
import DeleteServico from "../negocio/DeleteServico";
import ListagemCliente from "../negocio/ListagemCliente";
import ListagemProduto from "../negocio/ListagemProduto";
import ListagemServico from "../negocio/ListagemServico";
import ListagensFuncionalidades from "../negocio/ListagemFeatures";
import ListagensFeatures from "../negocio/ListagemFeatures";

console.log(
  "Bem-Vindo(a) à World Beauty"
);
let empresa = new Empresa();
empresa.popular();
let execucao = true;

while (execucao) {
  console.log("\nMenu");
  console.log("1 - Clientes");
  console.log("2 - Produtos");
  console.log("3 - Serviços");
  console.log("4 - Listagens");
  console.log("5 - Consumo");
  console.log("6 - Dados");
  console.log("0 - Sair\n");

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`Ecolha uma opção: `);

  switch (opcao) {
    case 1:
      console.log(`\nClientes`);
      console.log("1 - Cadastrar");
      console.log("2 - Atualizar");
      console.log("3 - Excluir");
      console.log("4 - Listar todos os Clientes");
      console.log("0 - Voltar ao Menu\n");

      let opcaoCli = entrada.receberNumero("Escolha uma opção: ");

      switch (opcaoCli) {
        case 1:
          let cadastroCliente = new CadastroCliente(empresa.getClientes);
          cadastroCliente.cadastrar();
          break;
        case 2:
          let updateCliente = new UpdateCliente(empresa.getClientes);
          updateCliente.atualizar();
          break;
        case 3:
          let deleteCliente = new DeleteCliente(empresa.getClientes);
          deleteCliente.excluir();
          break;
        case 4:
          let listagemCliente = new ListagemCliente(empresa.getClientes);
          listagemCliente.listar();
          break;
        case 0:
          break;
        default:
          console.log(`Opção (${opcaoCli}) não entendida :c`);
      }
      break;
    case 2:
      console.log(`\nProdutos`);
      console.log("1 - Cadastrar");
      console.log("2 - Atualizar");
      console.log("3 - Excluir");
      console.log("4 - Listar todos os Produtos");
      console.log("0 - Voltar ao Menu\n");

      let opcaoProd = entrada.receberNumero("Escolha uma opção: ");

      switch (opcaoProd) {
        case 1:
          let cadastroProduto = new CadastroProduto(empresa.getProdutos);
          cadastroProduto.cadastrar();
          break;
        case 2:
          let updateProduto = new UpdateProduto(empresa.getProdutos);
          updateProduto.atualizar();
          break;
        case 3:
          let deleteProduto = new DeleteProduto(empresa.getProdutos);
          deleteProduto.excluir();
          break;
        case 4:
          let listagemProduto = new ListagemProduto(empresa.getProdutos);
          listagemProduto.listar();
          break;
        case 0:
          break;
        default:
          console.log(`Opção (${opcaoProd}) não entendida :c`);
      }
      break;
    case 3:
      console.log(`\nServiços`);
      console.log("1 - Cadastrar");
      console.log("2 - Atualizar");
      console.log("3 - Excluir");
      console.log("4 - Listar todos os Serviços");
      console.log("0 - Voltar ao Menu\n");

      let opcaoServ = entrada.receberNumero("Escolha uma opção: ");

      switch (opcaoServ) {
        case 1:
          let cadastroServico = new CadastroServico(empresa.getServicos);
          cadastroServico.cadastrar();
          break;
        case 2:
          let updateServico = new UpdateServico(empresa.getServicos);
          updateServico.atualizar();
          break;
        case 3:
          let deleteServico = new DeleteServico(empresa.getServicos);
          deleteServico.excluir();
          break;
        case 4:
          let listagemServico = new ListagemServico(empresa.getServicos);
          listagemServico.listar();
          break;
        case 0:
          break;
        default:
          console.log(`Opção (${opcaoServ}) não entendida :(`);
      }
      break;
    case 4:
      console.log(`\nListagens`);
      console.log(
        "1 - Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade"
      );
      console.log("2 - Listagem de todos os clientes por gênero");
      console.log(
        "3 - Listagem geral dos serviços ou produtos mais consumidos"
      );
      console.log(
        "4 - Listagem dos serviços ou produtos mais consumidos por gênero"
      );
      console.log(
        "5 - Listagem dos 10 clientes que menos consumiram produtos ou serviços"
      );
      console.log("6 - Listagem dos 5 clientes que mais consumiram em valor");
      console.log("0 - Voltar ao Menu\n");

      let opcaoListagem = entrada.receberNumero("Insira a opção de listagem: ");
      let listagensFeatures = new ListagensFeatures(
        empresa.getClientes,
        empresa.getProdutos,
        empresa.getServicos
      );

      switch (opcaoListagem) {
        case 1:
          listagensFeatures.listagem10ConsumoQnt();
          break;
        case 2:
          listagensFeatures.listagemGenero();
          break;
        case 3:
          listagensFeatures.listagemMaisConsumidos();
          break;
        case 4:
          listagensFeatures.listagemConsumoGenero();
          break;
        case 5:
          listagensFeatures.listagem10MenosConsumoQnt();
          break;
        case 6:
          listagensFeatures.listagem5ConsumoValor();
          break;
        case 0:
          break;
        default:
          console.log(`Opção (${opcaoListagem}) não entendida :(`);
      }

      break;
    case 5:
      let consumo = new Consumo(
        empresa.getClientes,
        empresa.getProdutos,
        empresa.getServicos
      );
      consumo.consumir();
      break;
    case 6:
      empresa.popular();
      console.log(
        "Dados de Cliente, Produto e Servicos adiconados com Sucesso!"
      );
      break;
    case 0:
      execucao = false;
      console.log("Até a próxima!");
      break;
    default:
      console.log(`Opção (${opcao}) não entendida :(`);
  }
}
