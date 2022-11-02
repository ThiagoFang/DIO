const mainInput = document.querySelector("#mainInput");
const registerBtn = document.querySelector(".register__button");

const firstNoteInput = document.querySelector("#media1");
const secondNoteInput = document.querySelector("#media2");
const calcButton = document.querySelector(".calc__button");

const notesArea = document.querySelector('.notes');
const averangeArea = document.querySelector('.media');

const grades = [];

const addNote = (note) => {
  grades.push(note);
  alert(`Nota ${note} adicionada à lista com sucesso!`);
  mainInput.value = '';
};

registerBtn.addEventListener("click", () => {
  const note = mainInput.value;
  if (note.length < 1) {
    alert("Preencha o campo de Notas!");
    return;
  };
  addNote(note);
});

const getNotesArray = (number1, number2) => {
  const newList = [];

  for(let i in grades) {
    if(grades[i] > number1 && grades[i] < number2) newList.push(grades[i]);
  }

  return newList;
};

const getAverange = (notesList) => {
  let sumOfNotes = 0;
  for(let i in notesList) {
    const value = parseInt(notesList[i]);
    sumOfNotes = sumOfNotes + value;
  }
  return sumOfNotes / notesList.length;
};

calcButton.addEventListener('click', () => {
  const number1 = parseFloat(firstNoteInput.value);
  const number2 = parseFloat(secondNoteInput.value);

  if(number1 >= 0 && number2 >= 0 ) {
    const notesArray = getNotesArray(number1, number2);
    const averange = getAverange(notesArray);

    notesArea.innerHTML = `As notas dentro de ${number1} e ${number2} são: <br> ${notesArray.join(' | ')}`;
    averangeArea.innerHTML = `A média é de: ${averange}`;

    return
  };

  alert('Preencha os campos Nota 1 e Nota 2');
});