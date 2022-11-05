const depositDayInput = document.querySelector("#depositDay");
const depositValueInput = document.querySelector("#depositValue");
const depositButton = document.querySelector('.deposit__button');

const firstinterval = document.querySelector('#interval1');
const secondinverval = document.querySelector('#interval2');
const calcButton = document.querySelector('.calc__button');

const result = document.querySelector('.result');
const averange = document.querySelector('.averange');

const depositData = [];

const guardarValores = () => {
  const depositDay = parseInt(depositDayInput.value);
  const depositValue = parseInt(depositValueInput.value);
  depositData.push({ day: depositDay, value: depositValue });
};
depositButton.addEventListener('click', guardarValores);

const getInterval = () => {
  const interval = parseInt(firstinterval.value);
  const interval2 = parseInt(secondinverval.value);
  let isBlue = true;
  let days = 0;
  let totalValue = 0;
  
  result.innerHTML = '';
  for(let i = interval - 1; i < interval2; i++) {
    days++
    totalValue += depositData[i].value;
    const liCLass = isBlue ? 'blue' : 'green';
    result.innerHTML += `<span class="${liCLass}">Dia = ${depositData[i].day} - Valor Depositado: ${depositData[i].value}</span><br>`
    isBlue = !isBlue;
  }

  averange.innerHTML = `Quantidade de dias selecionados ${days}, valor total dos depósitos dos dias selecionados ${totalValue}, Média: ${totalValue / days}`
}

calcButton.addEventListener('click', getInterval);