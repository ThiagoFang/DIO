const mainInput = document.querySelector('.exercise__input');
const registerBtn = document.querySelector('.register__button');
const studentList = document.querySelector('.student__list');

const firstText = document.querySelector('.fisrt__favorite-movie');
const secondText = document.querySelector('.third__favorite-movie');
const movieCounter = document.querySelector('.movie__counter');

const movies = [];

const updateMovies = (movie) => {
  movies.push(movie);
  firstText.innerHTML = "Ainda não existe!";
  secondText.innerHTML = "Ainda não existe!";
  movieCounter.innerHTML = movies.length;

  if(movies.length != 0) {
    firstText.innerHTML = movies[0];
  };
  if(movies.length >= 3) {
    secondText.innerHTML = movies[2];
  };  
};

registerBtn.addEventListener('click', () => {
  if(mainInput.value.length < 1) {
    alert('Preencha o campo de Filmes!');
    return
  }
  updateMovies(mainInput.value);
});
