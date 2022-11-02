const mainInput = document.querySelector('#mainInput');
const registerBtn = document.querySelector('.register__button');

registerBtn.addEventListener('click', () => {
  if(mainInput.value.length < 1) {
    alert('Preencha o campo de Local!');
    return
  }
});