const mainInput = document.querySelector('.exercise__input');
const registerBtn = document.querySelector('.register__button');
const studentList = document.querySelector('.student__list');

const students = [];

const createHtmlList = (list) => {
  studentList.innerHTML = '';
  for(let i in list) {
    const newItem = `<li class="student__item">${list[i]}</li>`
    studentList.innerHTML += newItem;
  }
};

const createReverseStudentList = (studentName) => {
  const reverseList = [];

  for(let i = students.length - 1; i >= 0; i--) {
    reverseList.push(students[i]);
  }
  createHtmlList(reverseList);
};

registerBtn.addEventListener('click', () => {
  if(mainInput.value.length < 1) {
    alert('Preencha o campo de alunos!');
    return
  }

  students.push(mainInput.value);
  createReverseStudentList(mainInput.value);
});