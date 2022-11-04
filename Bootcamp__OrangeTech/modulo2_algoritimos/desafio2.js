// Desafio
// Neste desafio, você terá que criar uma função que faça um número como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 

// Entrada
// Você receberá um número onde: 
// Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
// Se o número for apenas múltiplo de 3 -> "Fizz" ; 
// Se o número for apenas múltiplo de 5 -> "Buzz"; 
// Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido;


const number = 15;

const fizzBuzz = (number) => {
  if(number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  if(number % 3 === 0) return "Fizz";
  if(number % 5 === 0) return "Buzz";
  return number;
};

console.log(fizzBuzz(number));