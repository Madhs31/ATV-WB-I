import Entrada from "../io/entrada";
import Cliente from "../models/Cliente";
import CPF from "../models/CPF";
import RG from "../models/RG";
import Telefone from "../models/Telefone";
import Cadastro from "./Cadastro";

export default class CadastroCliente extends Cadastro {
  private clientes: Array<Cliente>;
  private entrada: Entrada;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    console.log(`\nCadastro Cliente`);
    let nome = this.entrada.receberTexto(`Nome do Cliente: `);
    let nomeSocial = this.entrada.receberTexto(`Nome Social do Cliente: `);
    let genero = this.entrada.receberTexto(`Genero(M/F): `).toUpperCase();
    let valorCpf = this.entrada.receberTexto(`Cpf do Cliente: `);
    let valorRg = this.entrada.receberTexto(`RG do Cliente: `);
    let dataDoc = this.entrada.receberTexto(
      `Data de Emissão dos Documentos(dd/mm/yyyy): `
    );
    let partesDataDoc = dataDoc.split("/");
    let anoDoc = new Number(partesDataDoc[2].valueOf()).valueOf();
    let mesDoc = new Number(partesDataDoc[1].valueOf()).valueOf();
    let diaDoc = new Number(partesDataDoc[0].valueOf()).valueOf();
    let dataEmissaoDoc = new Date(anoDoc, mesDoc, diaDoc);
    let cpf = new CPF(valorCpf, dataEmissaoDoc);
    let rg = new RG(valorRg, dataEmissaoDoc);
    let ddd = this.entrada.receberTexto(`DDD do cliente: `);
    let numero = this.entrada.receberTexto(`Insira o numero do telefone: `);
    let telefone = new Telefone(ddd, numero);
    let dataCadatro = this.entrada.receberTexto(
      `Insira a data deste Cadastro(dd/mm/yyyy): `
    );
    let partesDataCad = dataCadatro.split("/");
    let anoCad = new Number(partesDataCad[2].valueOf()).valueOf();
    let mesCad = new Number(partesDataCad[1].valueOf()).valueOf();
    let diaCad = new Number(partesDataCad[0].valueOf()).valueOf();
    let dataEmissaoCad = new Date(anoCad, mesCad, diaCad);
    let cliente = new Cliente(
      nome,
      nomeSocial,
      genero,
      cpf,
      rg,
      telefone,
      dataEmissaoCad
    );
    this.clientes.push(cliente);
    console.log(`\nCadastro do Cliente (${nome}) concluido! 🎉 \n`);
  }
}
