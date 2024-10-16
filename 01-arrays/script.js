const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = "Patrick";
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(lastTeacher, teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher, teachers);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.log(teachers);

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
// ! PRIMA SOLUZIONE
const isFabioPresent = teachers.includes("Fabio");
console.log(isFabioPresent);

//! SECONDA SOLUZIONE
for (let i = 0; i < teachers.length; i++) {
  let actualTeacher = teachers[i];
  let isFabioPresen2 = false;

  if ("Fabio" === actualTeacher) {
    isFabioPresen2 = true;
    console.log(isFabioPresen2);
  }
}

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
// ! PRIMA SOLUZIONE
const lewisIndex = teachers.indexOf("Lewis");
console.log(lewisIndex);

//! SECONDA SOLUZIONE
let lewisInde2;

for (let i = 0; i < teachers.length; i++) {
  let actualTeacher = teachers[i];

  if ("Lewis" === actualTeacher) {
    lewisInde2 = i;
    console.log(lewisInde2);
  }
}
// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
// ! PRIMA SOLUZIONE
const teachersString = teachers.join(", ");
console.log(teachersString);

//! SECONDA SOLUZIONE
let teachersString2 = "";

for (let i = 0; i < teachers.length; i++) {
  let actualTeacher = teachers[i];

  teachersString2 += `${actualTeacher}, `;
}
console.log(teachersString2);

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length <= 0;
console.log(isTeachersEmpty);
