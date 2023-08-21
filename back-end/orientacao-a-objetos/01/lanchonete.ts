class PessoaCliente {
    private nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

class Pedidos {
    cliente: PessoaCliente;
    items: Items[];
    formaDePagar: string;
    discount: number;
    constructor(c: PessoaCliente, ic: Items[], fp: string, dis: number) {
        this.cliente = c;
        this.items = ic;
        this.formaDePagar = fp;
        this.discount = dis;
    }
    calculateTotal(): number {
        return this.items
          .reduce((p, i) => {
            const total = p + i.preco;
            return total;
          }, 0);
      }
}

class Items {
    nome: string;
    preco: number;
}