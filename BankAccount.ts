class ContaBancaria {
  public titular: string;
  public saldo: number;
  public numeroConta: string;

  constructor(titular: string, saldo: number, numeroConta: string) {
    this.titular = titular;
    this.saldo = saldo;
    this.numeroConta = numeroConta;
  }
}

class contaCorrente extends ContaBancaria {
  limiteChequeEspecial: number;

  constructor(
    titular: string,
    saldo: number,
    numeroConta: string,
    limiteChequeEspecial: number
  ) {
    super(titular, saldo, numeroConta);
    this.limiteChequeEspecial = limiteChequeEspecial;
  }
}

class contaPoupança extends ContaBancaria {}

const cliente = new ContaBancaria("emilly", 100, "0023");
console.log(cliente);
const contaJoao = new contaCorrente("João", 54, "000", 500);
console.log(contaJoao.limiteChequeEspecial);
