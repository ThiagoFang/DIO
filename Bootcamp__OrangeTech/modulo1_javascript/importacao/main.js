// Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
// Faça um programa que receba os 5 números sorteados para os alunos e moestre o maior número sorteado.

// Dados de entrada:
// 5
// 50
// 10
// 98
// 23

// Saída:
// 98

const { gets, print } = require('./funcoes-auxiliares');

const numeros = [];

for(let i = 0; i < 5; i++) {
  const numero = gets();
  numeros.push(numero);
};

let valor = 0
for(let i in numeros) {
  if(numeros[i] > valor) valor = numeros[i]
};

print(valor);