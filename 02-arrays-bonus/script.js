const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// ! PRIMA SOLUZIONE
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// ! SECONDA SOLUZIONE
let reversedTeachers2 = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  let actualTeacher = teachers[i];

  reversedTeachers2.unshift(actualTeacher);
}
console.log(reversedTeachers2);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
// ! PRIMA SOLUZIONE
/* const longNames = null; */

// ! SECONDA SOLUZIONE
let longNames2 = [];

for (let i = 0; i < teachers.length; i++) {
  let actualTeacher = teachers[i];

  if (actualTeacher.length >= 5) {
    longNames2.push(actualTeacher);
  }
}
console.log(longNames2);

// 3. Rimuovi 'Ed' dall'array teachers
// ! PRIMA SOLUZIONE
teachers.splice(5, 1);
console.log(teachers);

// ! SECONDA SOLUZIONE
for (let i = 0; i < teachers.length; i++) {
  let actualTeacher = teachers[i];

  if (actualTeacher === "Ed") {
    teachers.splice(i, 1);
  }
}
console.log(teachers);
