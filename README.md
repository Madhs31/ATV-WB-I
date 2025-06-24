# Sistema de Gerenciamento de Clientes — Grupo World Beauty (WB)

Este projeto é um sistema de gerenciamento de clientes baseado em linha de comando (CLI) desenvolvido em TypeScript. O objetivo é auxiliar o Grupo World Beauty (WB) no controle de clientes, produtos/serviços e registros de consumo de forma independente em cada unidade.

## 🛠 Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [VSCode](https://code.visualstudio.com/)

## 📁 Estrutura de Classes

Baseado no diagrama fornecido, o sistema é construído com as seguintes classes principais:

- `Empresa`
- `Cliente`, `CPF`, `RG`, `Telefone`
- `Produto` e `Servico`
- `Cadastro` e `Listagem` (abstratas)
- `CadastroCliente`, `ListagemClientes`

## 🔧 Funcionalidades

### CRUD
- Cadastro, leitura, atualização e exclusão de clientes
- Cadastro, leitura, atualização e exclusão de produtos e serviços

### Registro de Consumo
- Registro dos produtos e serviços adquiridos por cada cliente

### Listagens Especiais
- Top 10 clientes por quantidade consumida
- Clientes agrupados por gênero
- Produtos/serviços mais consumidos (geral e por gênero)
- 10 clientes com menor consumo em quantidade
- Top 5 clientes por valor consumido

## ▶️ Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/sua-empresa/nome-do-repositorio.git
cd nome-do-repositorio
