// function adultFilter(persons) {
//    return persons.filter(persons => persons.age >= 18)
//   }
  
//   const persons = [
//     { name: 'Paul', age: 16 },
//     { name: 'George', age: 17 },
//     { name: 'Lucas', age: 21 },
//     { name: 'Marco', age: 32 },
//     { name: 'Peter', age: 18 },
//     { name: 'Carl', age: 13 },
//     { name: 'Simon', age: 24 },
//     { name: 'Mark', age: 15 },
//     { name: 'Sandra', age: 34 },
//     { name: 'Alice', age: 28 }
//   ];
  
//   const adults = adultFilter(persons);
//   console.log(persons);
//   console.log(adults);

// const notes = [
//   {
//     id: 1,
//     description: 'Workout program',
//     todos: [
//       {
//         id: 1,
//         name: 'Push ups - 10 x 3',
//         done: true
//       },
//       {
//         id: 2,
//         name: 'Abdominals - 20 x 3',
//         done: true
//       },
//       {
//         id: 3,
//         name: 'Tapis Roulant - 15min',
//         done: true
//       }
//     ]
//   },
//   {
//     id: 2,
//     description: 'Front-end Roadmap',
//     todos: [
//       {
//         id: 1,
//         name: 'Learn HTML',
//         done: true
//       },
//       {
//         id: 2,
//         name: 'Learn CSS',
//         done: false
//       },
//       {
//         id: 3,
//         name: 'Learn JavaScript',
//         done: true
//       },
//       {
//         id: 4,
//         name: 'Learn Angular',
//         done: false
//       }
//     ]
//   },
//   {
//     id: 3,
//     description: 'My Movies Library',
//     todos: [
//       {
//         id: 1,
//         name: 'La città incantata',
//         done: true
//       },
//       {
//         id: 2,
//         name: 'Avatar',
//         done: true
//       },
//       {
//         id: 3,
//         name: 'Titanic',
//         done: false
//       }
//     ]
//   }
// ]
// function firstUncompletedNote(notes) {
//     for (let i = 0; i < notes.length; i++) {
//         const nota = notes[i];
//         let incompleta = false;

//         for (let j = 0; j < nota.todos.length; j++) {
//             if (nota.todos[j].done === false) {
//                 incompleta = true;
//                 break;
//             }
//         }
//         if (incompleta) {
//             return nota; 
//         }
//     }
// }
// const noteInProgress = firstUncompletedNote(notes);
// console.log('First note in progress: ', noteInProgress);

// const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];
// function aMadonna () {
//   fruits.forEach((fruit) => 
//     console.log(fruit + "!"))
  
// }
// aMadonna(fruits)

// const persons = [
//   { name: 'Paul', age: 16 },
//   { name: 'George', age: 17 },
//   { name: 'Lucas', age: 21 },
//   { name: 'Marco', age: 32 },
//   { name: 'Peter', age: 18 },
//   { name: 'Carl', age: 13 },
//   { name: 'Simon', age: 24 },
//   { name: 'Mark', age: 15 },
//   { name: 'Sandra', age: 34 },
//   { name: 'Alice', age: 28 }
// ];
// function nicknameMap() {
//    return persons.map((person) => person.name + "-" + person.age)
// }
// console.log(nicknameMap(persons))

// Implementare la funzione ageAverage che, dato un array di persone, calcola l'età media.

// const persons = [
//   { name: 'Paul', age: 16 },
//   { name: 'George', age: 17 },
//   { name: 'Lucas', age: 21 },
//   { name: 'Marco', age: 32 },
//   { name: 'Peter', age: 18 },
//   { name: 'Carl', age: 13 },
//   { name: 'Simon', age: 24 },
//   { name: 'Mark', age: 15 },
//   { name: 'Sandra', age: 34 },
//   { name: 'Alice', age: 28 }
// ];
// function calculateAverageAge(persons) {
//   let somma=0;
//  for (let i=0; i < persons.length; i++){
//   let p = persons[i] ;
// somma= somma + p.age;
//  } 
// return somma / persons.length
// }

// console.log(calculateAverageAge(persons))

// const studenti = [
//   { nome: "Alice", voto: 95 },
//   { nome: "Bob", voto: 88 },
//   { nome: "Carol", voto: 76 },
//   { nome: "David", voto: 92 },
//   { nome: "Eve", voto: 84 },
// ];
// studenti.forEach((studente) => console.log(studente.nome))

// let voto1=studenti.filter((studente) => studente.voto > 85)
// console.log(voto1)

// let nomiMaiuscoli = studenti.map(studente => studente.nome.toUpperCase());
// console.log(nomiMaiuscoli);

// let voto= studenti.find((studente) => studente.voto > 90)
//  console.log(voto)

// let sommaVoti = studenti.reduce((accumulatore, studente) => accumulatore + studente.voto, 0);

// let media = sommaVoti / studenti.length;
// console.log(media);

// const num1 = 10;
// const num2 = 20;
// const sum =`La somma dei due numeri è ${num1 + num2}`
// console.log(sum)

// const song=` Fuori quanto è brutto il tempo
// però si è calmato il vento
// il mio sguardo è meno freddo
// quest'inverno sta finendo`
// console.log(song)

// const name = "John";
// const message = "Welcome to our website!";
// const greeting =`Hello ${name} ${message}`
// console.log(greeting)

// const person = { name: "Alice", age: 30 };
// const { name, age }=person;
// const nome= name;
// const eta= age;
// console.log(nome, eta)

// const student = {
//   info: { name: "Bob", age: 25 },
//   grades: { math: 95, science: 89 }
// };
// const {info: { name, age}}= student
// const{ grades: { math, science}}= student
// const sum=`Hi,my name is ${name},I am ${age};
//  my greads are :science ${science} 
//  maths ${math}`
// console.log(sum)

// const colors = ["red", "green", "blue"];
// const [firstColor, secondColor ,ThirdColor] = colors
// console.log(firstColor, secondColor ,ThirdColor)

// let a = 5;
// let b = 10;
// [a, b] = [b, a];
// console.log(a,b)

// function somma (...num) {
//   return num.reduce((a,c)=> a+ c,0)
// }
// console.log(somma(1,43,6,4,3,4,6,5,2,24,53))

// function filterOutOdds(...numeri){
//   return numeri.filter((numero)=> numero%2===0)
// }
// console.log(filterOutOdds(2,6,34,435,5,7,8,9,))

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArray= [...arr1,...arr2]
// console.log(mergedArray)

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const  mergedObject = {...obj1,...obj1}
// console.log(mergedObject)

// const originalArray = [1, 2, 3, 4, 5];
// const cloneArray = [...originalArray];
// console.log(originalArray, cloneArray)