const mainInput = document.querySelector('#mainInput');
const registerBtn = document.querySelector('.register__button');

const travelInput = document.querySelector('#secondaryInput');
const travelArea = document.querySelector('.travel__area');

const locals = [];

registerBtn.addEventListener('click', () => {
  if(mainInput.value.length < 1) {
    alert('Preencha o campo de Local!');
    return
  }
  locals.push(mainInput.value);
  alert(`${mainInput.value} Adicionado com sucesso!`);
  mainInput.value = '';
});


travelInput.addEventListener('change', () => {
  const selector = parseInt(travelInput.value) - 1;
  const item = locals[selector];

  if(locals.length < selector + 1) {
    alert('Você não fez uma Xª viagem!');
    travelInput.value = '';
    return
  }
  if(travelInput.value < 1) {
    alert('Numero não disponivel!');
    travelInput.value = '';
    return
  }

  travelArea.innerHTML = ''
  travelArea.innerHTML += item;
});