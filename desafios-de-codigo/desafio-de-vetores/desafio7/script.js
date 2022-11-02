const mainInput = document.querySelector("#mainInput");
const registerBtn = document.querySelector(".register__button");
const moviesList = document.querySelector(".movies__list");

const alunos = [];

const verifyDuplicate = (name) => {
  let counter = 0
  for(let i in alunos) {
    if(name == alunos[i]) counter++;
  }
  return counter
}

registerBtn.addEventListener("click", () => {
  const name = mainInput.value;
  if (name.length < 1) {
    alert("Preencha o campo de Alunos!");
    return;
  }
  alunos.push(name);

  const newHtml = alunos.map(item => `<li class="movie__item">${item}</li>`).join('');
  moviesList.innerHTML = newHtml

  const duplicateName = verifyDuplicate(name);
  if(duplicateName > 1) alert(`O Nome do aluno ${name}, repetiu ${duplicateName} vezes.`)
});
