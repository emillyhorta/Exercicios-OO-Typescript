"use strict";
class ContaBancaria {
    constructor(titular, saldo, numeroConta) {
        this.titular = titular;
        this.saldo = saldo;
        this.numeroConta = numeroConta;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("saldo insuficiente");
        }
    }
    verSaldo() {
        console.log(`Saldo da conta ${this.numeroConta}: ${this.saldo}`);
    }
}
class contaCorrente extends ContaBancaria {
    constructor(titular, saldo, numeroConta, limiteChequeEspecial) {
        super(titular, saldo, numeroConta);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
}
class contaPoupança extends ContaBancaria {
}
const cliente = new ContaBancaria("emilly", 100, "0023");
console.log(cliente);
cliente.sacar(400);
cliente.verSaldo();
const contaJoao = new contaCorrente("João", 54, "000", 500);
console.log(contaJoao.limiteChequeEspecial);
test("saldo em conta ", () => {
    let valor = new ContaBancaria("emilly", 400, "001");
    cliente.sacar;
    expect(valor.sacar).toEqual(400);
});
