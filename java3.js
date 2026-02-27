// let naame;
// let surname="rossi" ;
// let fullName= naame + surname;
//  if(naame && surname){
//  console.log(fullName);
//  }
//     else{
//        console.log("Fullname is invalid");
//     }
//      let pin= 1099 ;
//      if(pin>999 && pin<=10000) {
//         console.log("Pin is valid")
//      }
//      else {
//         console.log("Pin is not valid")

//      }
    //   let primitive= 1 ;    
    //   if (typeof primitive === "string"){
    //     console.log("Variable string")
    //   } else if (typeof primitive === "number") {
    //     console.log("Vaiable number")
    //   } else if(typeof primitive === Boolean){
    //     console.log("Variable boolean")
    //   }

    // let age= 21;
     //let drive= age>= 18? "You can drive a car":"You are too young to drive"
//console.log(drive)

// let number = 7;
// let relativita= number >=0 ? "The number is positive":"The number is negative"
// console.log(relativita)

// let isSunnyDay= false;
// let isHomeworkCompleted = true;
// let goout= isSunnyDay && isHomeworkCompleted ? "Jesse can go out to play":"Jesse stays at home";
// console.log(goout);

// let tariffa="HB";
// switch (tariffa) {
//     case "BB":
//         console.log("Tariffa 50euro");
//         break;

//     case "HB":
//         console.log("Tariffa 80euro");
//         break;

//         case "FB":
//         console.log("Tariffa 100euro");
//         break;

//     default:

// }
// let favoriteFood="sushi";
// switch(favoriteFood){
//     case "pizza" :
//     console.log("You like PIZZA!");
//     break;
//     case "coconut" :
//     console.log("You like COCONUT!");
//     break;
//     default:
//     console.log("You like something else!");
//     break;
// }

 //let i = 0;
 //while(i > -10){
     //i--;
   // console.log(i)
 //}
//  for (let i = 0; i <= 10; i++) { 
//      console.log(i); } 
//for (let i = 0; i <= 20; i++) {
//  if (i % 2 === 0) {
//     console.log(i);
//   }
//}
//  let tot=0;
//   for (let n = 0; n<=10; n++){
//  tot = tot + n
//  console.log(n)
//   }
// console.log(tot)

//  function printName() {
//  let naame = "Eleonora";
//   return naame
// } 
//   let nome = printName ()
//   console.log(nome)

//  function sayHelloName (nome){
//    return "Hello " + nome
//  }
//  console.log(sayHelloName("pasqualo"))

// function sayHelloName(printName) {
//   setTimeout(function () {
//     console.log("hello " + printName());
//   }, 1000);
// }
// function printName() {
//   return "4mn3s14"

// }
// sayHelloName(printName);

// let checkNumber = (n) => {
//  return n > 0 ? "Positivo" : n < 0 ? "Negativo" : "Zero";
//    }
//  console.log(checkNumber(4))
// console.log(checkNumber(-3));
// console.log(checkNumber(0));

// let sum = (a, b) => {
//     return 5 + 5 
// }
// console.log(sum ())

// function canPlay() {
//   let sport = " Football";
//   let personName = "Cosimo";
//   return personName + sport;
// }
// console.log(canPlay())

// let sport = " Football";
// function canPlay() {
//     if (true) {
//         let personName = "Cosimo";
//         console.log(personName + sport);
//     }
// }

// canPlay();

// let car = {
//   nome:"auto",
//   color:"purple"
// }
// for(let key in car){
//   console.log(key, car [key])
// }
// let user = {
//   name: "Cosimo",
//   age: 30,
// };
// let newUser ={
//   name: "Cosimo",
//   age: 30,
// } 
// newUser.name = "Paolo";

// console.log(newUser);
// console.log(user);

// let user = {
//   name: "Cosimo",
//   age: 30,
// };

// let newUser = Object.assign({}, user)

// console.log(newUser, user, user === newUser);

// const smartphone = {
//   brand: "Apple",
//   name: "Iphone 13",
//   price: 1300,
// };
// Object.freeze(smartphone);

// smartphone.price = 100;

// smartphone.price = 100;

// console.log(smartphone);

// function Smartphone (brand, name, price) {
//     this.brand=brand
//     this.name=name
//     this.price=price

// }
// const phone1= new Smartphone ("samsung", "s26", 1500)

// const phone2= new Smartphone("xiaomi","xiaomi 12 lite", 300)

//  console.log(phone1, phone2, phone1 === phone2)

// const student = {
//   id: 1,
//   school: "Liceo",
//   year: 3,
//   personalData : {
//     nome: "Alberto",
//     surname: "Spaghetti",
//     age: 21,

//   }
// };
// console.log(student.personalData)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers [0]);
// console.log(numbers.length);
// console.log(numbers[numbers.length - 1]);
// console.log(numbers[20]);

// const students = [
//     { id: 1, name: "Luca", surname: "Rossi", age: 20 },
//     { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
//     { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
// ];
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }
// const names = ["Luca", "Marco", "Vittorio", "Giovanni"];
// names.pop();
// names.push("Pippo");
// names.unshift("Giovanni");
// console.log(names)

// const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

// console.log(names.join("-"));

// ESERCIZIO 2

// Un negozio ha una lista di prodotti:

const prodotti = [
  { nome: "Maglietta", prezzo: 20 },
  { nome: "Scarpe", prezzo: 80 },
  { nome: "Cappello", prezzo: 15 },
  { nome: "Giacca", prezzo: 120 },
];

// - Crea un nuovo array contenente solo i prodotti con prezzo superiore a 50.
// - Stampa il nuovo array.
 let prodottiNew = prodotti.filter((prodotto)=> prodotto.prezzo >= 50  ) 
 console.log(prodottiNew)
 prodotti.keys