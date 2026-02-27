// 1 let persona = {
//   nome: "Luca",
//   eta: "24",
//   indirizzo: {
//     citta: "Palermo",
//     provincia: "PA",
//     cap: 90100,
//     via: "Via Roma 123",
//   },
//   occupazione: {
//     studente: true,
//     impiegato: false,
//     disoccupato: false,
//   },
// };
// console.log(
//   persona.nome,
//   "ha",
//   persona.eta,
//   "anni, vive a",
//   persona.indirizzo.citta,
//   ".",
//   persona.occupazione.studente
//     ? "Attualmente è uno studente"
//     : ""
// );

// 2 const prodotto = {
//   nome: "Smartphone",
//   prezzo: 89.9,
//   sconto: 20,
// };
// let scontato = prodotto.prezzo - (prodotto.prezzo * prodotto.sconto / 100);

// console.log("Il prezzo finale dello smartphone è: " + scontato);

// 3 const persona1 = {
//     nome: "Alice",
//     eta: 30,
// };
// const persona2 = {
//     nome: "Bob",
//     eta: 14,
// };
// function verificaEta(eta) {
//     if (eta >= 18) {
//         return ("è maggiorenne, può accedere al sito.")
//     }
//     else {
//         return ("è minorenne, non può accedere al sito.")
//     }

// }
// console.log((persona1.nome) + verificaEta(persona1.eta))
// console.log((persona2.nome) + verificaEta(persona2.eta))

// function totaleConIva (imponibile, ivaPercento) {
// if(typeof imponibile === "number" && typeof ivaPercento === "number"){
//   let risultato=(imponibile) + ((imponibile) * (ivaPercento) /100)
//    return risultato
// } else{ return " error 404; i valori passati devono essere numeri"}
   
//   }
//    console.log(totaleConIva("100", "22")),
//  console.log(totaleConIva(250.5, 10)) con number() era sbagliao in quanto se metti parametri random si blocca


//  let account = {
//  username: "admin",
//  password: "1234",
//  tentativi: 0
//  }
//  let inputUser="4mn3s14"
//  let inputPass="1234"


//  for(let i= 0; i <=3, i++;)
//   { if(inputUser === account.username && inputPass === account.password ){
//      console.log("accesso effettuato")
//  } else{
//   account.tentativi ++;
//       console.log("accesso negato" + account.tentativi)
     
//  }

//  }
//console.log(account)

// const partita = {
//    squadra1: {
//      nome: "Juventus",
//      punteggio: 0,
//    },
//   squadra2: {
//     nome: "Inter",
//     punteggio: 0,
//   },
// };
// function segnaGol(squadra1, squadra2) {
//   let gol = Math.floor(Math.random() * 100) + 1;
//   if (gol <= 50) {
//     squadra1.punteggio += 1;
//     console.log(squadra1.nome + " ha segnato")

//   } else {
//     squadra2.punteggio += 1;
//     console.log(squadra2.nome + " ha segnato");
//   } 
// }
// for (let i=0; i <3 ; i++) { segnaGol(partita.squadra1,partita.squadra2)
//  }
// if(partita.squadra1.punteggio === partita.squadra2.punteggio){
//   console.log("hanno pareggiato")
// }
//  console.log(partita.squadra1.punteggio ,"-", partita.squadra2.punteggio)


