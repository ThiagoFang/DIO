// 1 - Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.

// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê p valor gasto em reais para
// realizar este percurso.

class Carro {
  constructor(marca, cor, gastoMedioCombustivel) {
    this.marca = marca; 
    this.cor = cor;
    this.gastoMedioCombustivel = gastoMedioCombustivsel;
  };

  calcularValorCombustivel( precoCombustivel, distanciaEmKM ) {
    const litrosConsumidos = distanciaEmKM / this.gastoMedioCombustivel;
    const valor = litrosConsumidos * precoCombustivel;
    return `O Seu ${this.marca} ${this.cor}, vai precisar de R$${valor.toFixed(2)} Reais de gasolina.`
  };
};

const civic = new Carro('civic', 'vermelho', 2)

console.log(civic.calcularValorCombustivel(4.75, 2));