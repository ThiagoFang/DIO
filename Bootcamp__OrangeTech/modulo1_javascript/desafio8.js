// Crie um programa que seja capaz de percorrer uma lista de números e
// imprima cada número Par encontrado nela.

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const verificarParEmLista = (listaDeNumeros) => {
  for(let i in listaDeNumeros) {
    const numero = listaDeNumeros[i];

    if(numero % 2 == 0) console.log(numero);
  };
};

verificarParEmLista(listaDeNumeros);