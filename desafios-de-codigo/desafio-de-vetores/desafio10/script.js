const mainInput = document.querySelector("#mainInput");
const registerBtn = document.querySelector(".register__button");
const numbersArea = document.querySelector('.numerosCadastrados');
const resultNumber = document.querySelector('.maiorEMenor');

const numbers = [];

registerBtn.addEventListener('click', () => {
  const value = mainInput.value;
  if(value.length < 1) return alert("Preencha o campo!")
  numbers.push(value);
  let higherNumber = 0;
  let smallerstNumber = numbers[0];

  numbersArea.innerHTML = '';
  for(let i in numbers) {
    numbersArea.innerHTML += `${parseInt(i) + 1}º número: ${numbers[i]}<br>`; 
    if(higherNumber < numbers[i]) higherNumber = numbers[i];
    if(smallerstNumber > numbers[i]) smallerstNumber = numbers[i];
  };

  resultNumber.innerHTML = `
    <span>Maior Numero: ${higherNumber}</span><br>
    <span>Menos Numero: ${smallerstNumber}</span><br>
  `;
});