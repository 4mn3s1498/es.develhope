// const students = [
// { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
// { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
// { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
// { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
// ];
//    function work ( ){
// students.forEach((student)=> { 
//     console.log(student.name);
//     switch(student.hobby){
//         case "gamer": console.log("Life Is a Game, Play to Win!")
//             break
//             case "sportsman" :
//                 console.log("Never Give Up")
//                 break
//                 case "photographer":
//                     console.log("A picture is worth a thousand words!")
//                     break
//     }
    
// })
// students.sort((a,b) => a.age - b.age) 
//     console.log(students[0].name + " è il più giovane")
//     students.sort((a,b) => b.surname.length - a.surname.length)
//     console.log(students[0].surname + " è il cognome più lungo")
// }
// work()
// students.splice(2,0,{id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby:"photographer"}) 
//     work()


// Scrivi una funzione che prenda come parametro un array di oggetti, ognuno 
// dei quali rappresenta una macchina con le seguenti proprietà: brand, model, year. 
// La funzione dovrebbe restituire un nuovo array di stringhe che contenga la marca e
//  il modello di ogni macchina nel formato "brand model".
// Stampare il nuovo array.

// const macchine = [
//   {
//     brand: "audi",
//     model: "a3",
//     year: 2019
//   }
// ]
// mio function produci(array) { 
//     array.map((macchina) => {
//         console.log(macchina.brand, macchina.model)
//     })
//      let consegna=macchine.map((macchina) => macchina.brand + " " + macchina.model)
// console.log(consegna) 
// }

// produci(macchine)
// ai function produci(array) {
//     return array.map(macchina => `${macchina.brand} ${macchina.model}`);
// }
// const risultato = produci(macchine);
// console.log(risultato);
