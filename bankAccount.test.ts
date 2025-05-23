export class ContaBancaria {
  public titular: string;
  public saldo: number;
  public numeroConta: number;
  private static contador = 1;

  constructor(titular: string) {
    if (!titular || titular.trim() === "") {
      throw new Error("Error. Nome do titular é obrigatorio");
    }
    this.titular = titular;
    this.saldo = 0;
    this.numeroConta = ContaBancaria.contador++;
  }

  criarConta(nome: String): ContaBancaria {
    const conta = new ContaBancaria("Emilly");
    if (conta.saldo == 0) {
      console.log("O saldo da conta é zero");
    }
    return conta;
  }

  depositar(valor: number): void {
    if (valor == 0) {
      throw new Error("Error ao depositar, pois a entrada é inválida");
    }

    this.saldo = +valor;
    console.log(
      `Deposito de ${valor} realizado com sucesso. Saldo atual é de ${this.saldo}`
    );
  }

  sacar(valor: number): void {
    if (valor > 0) {
      console.log("Existe saldo disponível");
    } else if (valor == 0 || valor < 0) {
      throw new Error("Entrada inválida");
    }

    this.saldo -= valor;
    console.log(
      `Saque de valor ${valor}, realizado! Seu saldo atual é ${this.saldo}`
    );
  }

  transferir(
    valor: number,
    titularTransferencia: string,
    contaDestino: ContaBancaria
  ): void {
    if (valor > this.saldo) {
      throw new Error(
        "Não é possível transferir pois o valor é maior que o saldo"
      );
    } else {
      console.log("valores prontos pra serem transferidos");
    }
    if (contaDestino == this) {
      throw new Error("Não é possível transferir");
    } else {
      console.log("Pode transferir");
    }

    if (this.titular == titularTransferencia) {
      throw new Error(
        "Você está transferindo para sua mesma conta. Digite outra conta"
      );
    }

    this.saldo -= valor;
    contaDestino.saldo += valor;
  }

  consultarSaldo(): void {
    const conta = new ContaBancaria("Emilly");
    const saldoAntes = conta.consultarSaldo;
    const saldoDepois = conta.consultarSaldo;
    console.log(`O seu saldo é de: R$ ${this.saldo}`);

    expect(saldoAntes).toBe(saldoDepois);
    expect(conta.consultarSaldo);
  }

  alterarTitular(novoNome: string): void {
    if (novoNome == "") {
      throw new Error("Nome está vazio, por favor inserir um nome válido");
    }
    if (novoNome == this.titular) {
      throw new Error("Esse nome já existe");
    } else {
      this.titular = novoNome;
      console.log("nome ok");
    }
  }
}

test("Depósito com valor válido e titular válido ", () => {
  let conta = new ContaBancaria("Emilly");
  expect(conta.titular).toEqual("Emilly");
  expect(conta.saldo).toEqual(0);
});

test("Verificar se a conta criada é uma instância da classe principal", () => {
  let conta = new ContaBancaria("Emilly");
  expect(conta).toBeInstanceOf(ContaBancaria);
});

test("Verificar se o saldo inicial da conta é zero", () => {
  let conta = new ContaBancaria("Emilly");
  expect(conta.saldo).toEqual(0);
});

test("Verificar se o numero da conta é unico", () => {
  let conta1 = new ContaBancaria("Emilly");
  let conta2 = new ContaBancaria("João");
  expect(conta1.numeroConta).not.toBe(conta2.numeroConta);
});

test("Verificar se os atributos da classe principal existem", () => {
  let conta = new ContaBancaria("Emilly");
  expect(conta).toHaveProperty("titular");
  typeof conta.saldo == "number";
  typeof conta.titular == "string";
  expect(conta.numeroConta).toBeDefined();
});

test("Verificar se a classe lança erro ao tentar criar uma conta com nome vazio", () => {
  expect(() => {
    new ContaBancaria("");
  }).toThrow(/Nome do titular/);
});
