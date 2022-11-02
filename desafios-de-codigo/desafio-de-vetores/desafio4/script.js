const mainInput = document.querySelector('#mainInput');
const registerBtn = document.querySelector('.register__button');
const moviesList = document.querySelector('.movies__list');

let variant = false;
registerBtn.addEventListener('click', () => {
  if(mainInput.value.length < 1) {
    alert('Preencha o campo de Filme!');
    return
  }
  const movieClass = variant ? 'movie__item-variant' : 'movie__item';
  moviesList.innerHTML += `<li class="${movieClass}">${mainInput.value}</li>`
  variant = !variant
});