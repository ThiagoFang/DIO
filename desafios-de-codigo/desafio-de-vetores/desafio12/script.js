const studentRegisterInput = document.querySelector("#studentRegister");
const studentNoteInput = document.querySelector("#studentNote");
const depositButton = document.querySelector('.deposit__button');

const pairInput = document.querySelector('#parOuImpar');
const calcButton = document.querySelector('.calc__button');
const studentsArea = document.querySelector('.students__area');

const studentRegisters = [];
const studentNotes = [];

const addStudent = () => {
  const studentRegister = parseInt(studentRegisterInput.value);
  const studentNote = parseInt(studentNoteInput.value);
  studentNotes.push(studentNote);
  studentRegisters.push(studentRegister);
}
depositButton.addEventListener('click', addStudent);

const calcArrayMedia = (array) => {
  let sum = 0;
  for(let i in array) {
    sum += array[i];
  };
  return sum / array.length;
};

const printInfo = (studentRAs, studentNotes, averange) => {
  studentsArea.innerHTML = '';
  for(let i in studentNotes) {
    if(studentNotes[i] >= averange) {
      studentsArea.innerHTML += `Aluno com RA = ${studentRAs[i]} e nota ${studentNotes[i]} foi selecionado pois a média é ${averange.toFixed(2)}<br>`;
    }
  }
} 

const getPairOrOdd = () => {
  const value = pairInput.value;
  const selectedNotes = [];
  const selectedStudents = [];

  if(value === 'P') {
    for(let i in studentNotes) {
      if(studentNotes[i] % 2 === 0) {
        selectedNotes.push(studentNotes[i]);
        selectedStudents.push(studentRegisters[i]);
      };
    }
    const averange = calcArrayMedia(selectedNotes);
    printInfo(selectedStudents, selectedNotes, averange);
  };
  if(value === 'I') {
    for(let i in studentNotes) {
      if(studentNotes[i] % 2 != 0) {
        selectedNotes.push(studentNotes[i]);
        selectedStudents.push(studentRegisters[i]);
      };
    }
    const averange = calcArrayMedia(selectedNotes);
    printInfo(selectedStudents, selectedNotes, averange);
  }
};
calcButton.addEventListener('click', getPairOrOdd)