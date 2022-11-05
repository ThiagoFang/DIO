const mainInput = document.querySelector('.exercise__input');
const registerBtn = document.querySelector('.register__button');
const studentList = document.querySelector('.student__list');

const students = [];

const createReverseStudentList = () => {
  let reverseList = [...students];
  reverseList.reverse();
  
  const htmlList = reverseList.map(item => `<li class="student__item">${item}</li>`)
  studentList.innerHTML = htmlList.join('');
};

registerBtn.addEventListener('click', () => {
  if(mainInput.value.length < 1) {
    alert('Preencha o campo de alunos!');
    return
  }
  students.push(mainInput.value);
  createReverseStudentList();
});