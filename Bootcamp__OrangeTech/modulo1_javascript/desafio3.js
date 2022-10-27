// 3 - O IMC - Inddice de Massa Corporal é um critério da Organização Mundial de Saúde 
// para dar uma indicação sobre a condição de peso de uma pessoa adulta.

// Formula do IMC:
// IMC = peso / (altura * altura)

// Questão: Elabore um algoritimo que dado o peso e a altura de um aulto mostre sua condição de acordo com a tabela abaixo.

// IMC em adultos Condição:
//   - Abaixo de 18.5, Abaixo do peso;
//   - Entre 18.5 e 25, Peso normal;
//   - Entre 25 e 30, Acima do peso;
//   - Entre 30 e 40, Obeso;
//   - Acima de 40, Obesidade Grave;

const calcularIMC = (peso, altura) => {
  const IMC = (peso / (altura * altura)).toFixed(2);

  if(IMC < 18.5) return `O Seu IMC é ${IMC}, você está abaixo do peso!`;
  if(IMC >= 18.5 && IMC < 25) return `O Seu IMC é ${IMC}, Seu peso esta normal!`;
  if(IMC >= 25 && IMC < 30) return `O Seu IMC é ${IMC}, Você está acima do peso!`;
  if(IMC >= 30 && IMC < 40) return `O Seu IMC é ${IMC}, Você esta com Obesidade!`;
  if(IMC >=  40) return `O Seu IMC é ${IMC}, Você esta com Obesidade grave!`;
};

console.log(calcularIMC(60, 1.60))