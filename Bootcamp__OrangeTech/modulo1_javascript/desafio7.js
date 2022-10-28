// 7 - Crie um programa que dado um número, imprima a sua tabuada.

const criarTabuada = (numero) => {
  for(let i = 1; i <= 10; i++) {
    console.log(i * numero);
  }
};

criarTabuada(2)