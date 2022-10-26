// Faça um programa para calcular o valor de uma viagem.Faça

// Você tera 3 variáveis. Sendo elas:
//   1 - Preço do etanol;
//   2 - Preço da gasolina;
//   3 - O tipo de combustível que está no seu carro;
//   4 - Gasto médio de combustível do carro por KM;
//   5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

/* DATA */
const combustivel = {
  gasolina: {
    preco: 5.79 
  },
  etanol: {
    preco: 3.29
  },
};

/* FUNCTION */

const calcularValorGasto = (tipoGasolina, distanciaEmKM) => {
  const precoCombustivel = combustivel[tipoGasolina].preco;
  const kmPorLitros = 10;

  const litrosConsumidos = distanciaEmKM / kmPorLitros;
  const valor = precoCombustivel * litrosConsumidos;

  return valor;
};

console.log(calcularValorGasto('etanol', 200));