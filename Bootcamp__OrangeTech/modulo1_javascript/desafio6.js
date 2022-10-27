// 2 - Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.

// As pessoas devem ter a capacidade de dizer o valor do seu IMC ( IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao josé
// para dizer o valor do seu IMC.

class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  };

  calcularIMC() {
    const IMC = (this.peso / (this.altura * this.altura)).toFixed(2);

    if(IMC < 18.5) return `O IMC de ${this.nome} é ${IMC}, você está abaixo do peso!`;
    if(IMC >= 18.5 && IMC < 25) return `O IMC de ${this.nome} é ${IMC}, Seu peso esta normal!`;
    if(IMC >= 25 && IMC < 30) return `O IMC de ${this.nome} é ${IMC}, Você está acima do peso!`;
    if(IMC >= 30 && IMC < 40) return `O IMC de ${this.nome} é ${IMC}, Você esta com Obesidade!`;
    if(IMC >=  40) return `O IMC de ${this.nome} é ${IMC}, Você esta com Obesidade grave!`;
  };
};

const jose = new Pessoa('José', 78, 1.80);

console.log(jose.calcularIMC());