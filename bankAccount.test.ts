export class ContaBancaria {
  public titular: string;
  public saldo: number;
  public numeroConta: string;

  constructor(titular: string) {
    this.titular = titular;
    this.saldo = 0;
    this.numeroConta = "";
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

/*test("saldo em conta ", () => {
  let cliente = new ContaBancaria();
  cliente.sacar;
  expect(cliente.saldo).toEqual(600);
}); */
