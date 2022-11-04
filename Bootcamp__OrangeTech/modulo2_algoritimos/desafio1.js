// Desafio
// Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

// Entrada
// A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

// Saída
// A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.

const number = 3;
const limit = 18;

let multiplosDeN = 0;

for(let i = 0; i <= limit; i++) {
  if(i % number === 0) multiplosDeN += i;
}

console.log(multiplosDeN);