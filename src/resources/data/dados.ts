import Cliente from "../../models/Cliente";
import Produto from "../../models/Produto";
import Servico from "../../models/Servico";
import CPF from "../../models/CPF";
import RG from "../../models/RG";
import Telefone from "../../models/Telefone";

const clientesPop: Cliente[] = [];
const produtosPop: Produto[] = [];
const servicosPop: Servico[] = [];

const nomesProdutos = [
  "Sérum Iluminador com Pérolas de Ouro",
  "Creme Anti-Idade com Peptídeos Inteligentes",
  "Gel de Limpeza Facial com Carvão Ativado",
  "Óleo Facial Nutritivo com Rosa Mosqueta",
  "Bálsamo Multifuncional para Lábios e Cutículas",
  "Creme Corporal Firmador com Cafeína",
  "Solução Tônica Adstringente com Hamamélis",
  "Creme para Mãos com Vitamina E e Proteção UV",
  "Ampola Capilar de Brilho Instantâneo",
  "Sabonete Íntimo com Prebióticos Naturais",
  "Esfoliante Corporal com Sementes de Damasco",
  "Mousse de Limpeza Facial com Colágeno",
  "Máscara Noturna de Hidratação Profunda",
  "Creme para Pés com Ureia 10%",
  "Spray Finalizador com Efeito Gloss",
  "Shampoo Detox com Carvão Vegetal",
  "Leave-in Reconstrutor com Queratina",
  "Hidratante Facial com Filtro Solar FPS 20",
  "Bruma Corporal Perfumada com Flor de Laranjeira",
  "Óleo Bifásico Hidratante com Amêndoas Doces",
];


nomesProdutos.forEach((nome, index) => {
  const id = `P${index + 1}`;
  const preco = (25 + index * 3).toFixed(2);
  produtosPop.push(new Produto(id, nome, preco));
});

const nomesServicos = [
  "Hidratação Facial com Máscara de Ouro",
  "Massagem Relaxante com Aromaterapia",
  "Tratamento de Crescimento Capilar com Dermapen",
  "Escova Modeladora com Finalização a Frio",
  "Terapia de Ozônio para Couro Cabeludo",
  "Depilação Egípcia com Linha",
  "Banho de Lua com Hidratação Corporal",
  "Peeling de Diamante com Clareamento",
  "Limpeza Energizante com Argila Verde",
  "Maquiagem Profissional para Eventos",
  "Tratamento para Olheiras com Laser de Baixa Frequência",
  "Spa dos Pés com Escalda Aromático",
  "Design de Barba com Toalha Quente",
  "Clareamento de Axilas com Ácidos Naturais",
  "Massagem Antiestresse com Velas Quentes",
  "Aplicação de BB Glow Facial",
  "Revitalização Capilar com Blend de Óleos",
  "Alinhamento Capilar Orgânico",
  "Tratamento de Queda Capilar com Alta Frequência",
  "Esfoliação Corporal com Açúcar Mascavo e Mel",
];


nomesServicos.forEach((nome, index) => {
  const id = `S${index + 1}`;
  const preco = (60 + index * 5).toFixed(2);
  servicosPop.push(new Servico(id, nome, preco));
});

for (let i = 1; i <= 30; i++) {
  const nome = `Cliente ${i}`;
  const nomeSocial = `Cliente Social ${i}`;
  const genero = i % 2 === 0 ? "F" : "M";

  const cpfNumero = `000.000.000-${((i % 90) + 10)
    .toString()
    .padStart(2, "0")}`;
  const cpf = new CPF(cpfNumero, new Date(1990, 0, i));

  const rgNumero = `${i}`.padStart(9, "0");
  const rg = new RG(rgNumero, new Date(2005, 0, i));

  const ddd = "11";
  const numeroTel = `9${Math.floor(10000000 + Math.random() * 8999999)}`;
  const telefone = new Telefone(ddd, numeroTel);

  const dataCadastro = new Date();

  const cliente = new Cliente(
    nome,
    nomeSocial,
    genero,
    cpf,
    rg,
    telefone,
    dataCadastro
  );

  const qtdProdutos = Math.floor(Math.random() * 5) + 1;
  const qtdServicos = Math.floor(Math.random() * 5) + 1;

  for (let j = 0; j < qtdProdutos; j++) {
    const produtoAleatorio =
      produtosPop[Math.floor(Math.random() * produtosPop.length)];
    cliente.consumirProduto(produtoAleatorio);
  }

  for (let j = 0; j < qtdServicos; j++) {
    const servicoAleatorio =
      servicosPop[Math.floor(Math.random() * servicosPop.length)];
    cliente.consumirServico(servicoAleatorio);
  }

  clientesPop.push(cliente);
}

export { clientesPop, produtosPop, servicosPop };
