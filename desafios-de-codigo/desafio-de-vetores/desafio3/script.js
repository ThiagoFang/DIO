const mainInput = document.querySelector('#mainInput');
const registerBtn = document.querySelector('.register__button');
const moviesList = document.querySelector('.movies__list');

const movies = [];

registerBtn.addEventListener('click', () => {
  if(mainInput.value.length < 1) {
    alert('Preencha o campo de Filme!');
    return
  }
  moviesList.innerHTML += `<li class="movie__item">${mainInput.value}</li>`
});