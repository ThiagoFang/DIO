const mainInput = document.querySelector("#mainInput");
const registerBtn = document.querySelector(".register__button");
const moviesList = document.querySelector(".movies__list");

const alunos = [];

const verifyName = (name) => {
  for(let i in alunos) {
    if(name == alunos[i]) return true;
  }
}

registerBtn.addEventListener("click", () => {
  if (mainInput.value.length < 1) {
    alert("Preencha o campo de Alunos!");
    return;
  }
  const name = mainInput.value;

  if (verifyName(name)) {
    alert(`O Aluno ${name} já existe na lista!`);
  } else {
    alunos.push(name);
    const newHtml = alunos.map(item => `<li class="movie__item">${item}</li>`).join('');
    moviesList.innerHTML = newHtml
  };
});
