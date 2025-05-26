# 🏦 Conta Bancária em TypeScript + Jest

Este repositório foi criado para treinar para uma entrevista técnica. O objetivo foi desenvolver uma classe que representa uma **conta bancária**, utilizando **TypeScript** e **Jest** para realizar **testes unitários**.

---

## 🛠️ Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)

---

## 📦 Funcionalidades da Classe `ContaBancaria`

A classe possui os seguintes atributos:

- `titular`: nome do titular da conta
- `saldo`: valor disponível
- `numeroConta`: número da conta bancária

### 🔹 Construtor

O construtor recebe os três atributos citados acima.  
Foi implementada uma validação no nome do titular para garantir que ele não esteja vazio e não contenha apenas espaços em branco, utilizando a função `trim()` do JavaScript.

---

### 🔹 Método: `criarConta(nome: string)`

- Cria uma nova conta com o nome informado.
- Verifica se o saldo está definido e válido.

---

### 🔹 Método: `depositar(valor: number)`

- Recebe o valor como parâmetro.
- Verifica se o valor de entrada é válido (maior que zero).
- Atualiza o saldo e retorna o novo valor da conta.

---

### 🔹 Método: `sacar(valor: number)`

- Verifica se há saldo suficiente para realizar o saque.
- Subtrai o valor sacado do saldo atual.
- Retorna o valor retirado e o saldo restante.

---

### 🔹 Método: `transferir(valor: number, titularDestino: string, contaDestino: ContaBancaria)`

- Recebe o valor, nome do titular de destino e a conta de destino.
- Verifica se os dados da conta de destino estão corretos.
- Realiza a transferência entre contas e atualiza os saldos.

---

### 🔹 Método: `consultarSaldo()`

- Retorna o saldo atual da conta.
- Verificado nos testes unitários usando o Jest para comparar o saldo antes e depois de operações financeiras.

---

### 🔹 Método: `alterarTitular(novoNome: string)`

- Recebe um novo nome de titular.
- Faz validações para garantir que o nome não esteja vazio ou com espaços em branco.
- Atualiza o nome do titular.

---

## 🧪 Testes

Todos os métodos da classe foram testados com **Jest**, cobrindo:

- Validações de entrada
- Comportamento esperado após operações de saque, depósito, transferência
- Verificação de saldo antes e depois das transações
- Alteração de titular

---

## 🚀 Como executar

```bash
# Instalar dependências
npm install

# Rodar os testes
npm test
