// Descrição
// Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

// Entrada
// A Entrada será composta por um número inteiro, N. 


const number = 10;

const sumReverseNumbers = (number) => {
  let sum = 0;
  for(let i = number; i >= 0; i--) {
    sum += i;
  }
  return sum;
};

console.log(sumReverseNumbers(number))