class Conta {
  private _titular: string;
  private _saldo: number;

  constructor(titular: string) {
    this._titular = titular;
    this._saldo = 0;
  }

  get titular(): string {
    return this._titular;
  }

  set titular(titular: string) {
    this._titular = titular;
  }

  get saldo(): number {
    return this._saldo;
  }

  // public getTitular(): string {
  //   return this._titular;
  // }

  // public setTitular(titular: string): void {
  //   this._titular = titular;
  // }

  // public getSaldo(): number {
  //   return this._saldo;
  // }

  public depositar(valor: number): void {
    if (valor > 0) {
      this._saldo = this._saldo + valor;
    }
  }

  public sacar(valor: number): void {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo = this._saldo - valor;
    }
  }
}

let contaDoPaulo: Conta = new Conta("Paulo");
console.log(contaDoPaulo.saldo);
contaDoPaulo.titular = "Vanderley";
console.log(contaDoPaulo);
