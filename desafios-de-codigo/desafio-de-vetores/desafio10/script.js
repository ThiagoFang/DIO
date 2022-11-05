const mainInput = document.querySelector("#mainInput");
const registerBtn = document.querySelector(".register__button");

const searchInput = document.getElementById('searchInput');
const searchButton = document.querySelector('.search__button');

const busLines = [];

const addBusLine = () => {
  const valor = mainInput.value;
  if(valor.length < 1) alert("Digite um valor!");
  busLines.push(valor);
  mainInput.value = '';
};

const searchBus = () => {
  const valor = searchInput.value;
  if(valor.length < 1) alert("Digite um valor no campo de busca!");
  
  const busFound = [];
  let count = 0;
  for(let i in busLines) {
    if(valor === busLines[i]) {
      count++
      busFound.push(parseInt(i) + 1);
    }
  }
  if(count > 0){
    alert(`Voce já pegou essa linha ${count} vezes, nessa ordem ${busFound.join()}`)
    return
  }
  alert(`Você nunca pegou essa linha`);
}

registerBtn.addEventListener('click', addBusLine);
searchButton.addEventListener('click', searchBus);