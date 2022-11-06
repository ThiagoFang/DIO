const studentRegisterInput = document.querySelector("#studentRegister");
const studentNoteInput = document.querySelector("#studentNote");
const depositButton = document.querySelector('.deposit__button');

const calcButton = document.querySelector('.calc__button');

const studentRegisters = [];
const studentNotes = [];

const addStudent = () => {
  const studentRegister = parseInt(studentRegisterInput.value);
  const studentNote = parseInt(studentNoteInput.value);
  studentNotes.push(studentNote);
  studentRegisters.push(studentRegister);
}
depositButton.addEventListener('click', addStudent);