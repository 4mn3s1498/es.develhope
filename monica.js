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
// for(let i= 0; i <3; i++){
// if(inputUser === account.username && inputPass === account.password ){
//      console.log("accesso effettuato")
//  } else{
//     account.tentativi ++;
//       console.log("accesso negato" + account.tentativi)

//  }} 
//  console.log(account)

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

// Un contatore stampa una sequenza da 1 a 25.
//   Per ogni numero:
//   - se è multiplo di 4 stampa "POP"
//   - se è multiplo di 6 stampa "BANG"
//   - se è multiplo di 4 e 6 stampa "POPBANG"
//   - altrimenti stampa il numero

// const contatore = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
// for(let i=0; i < contatore.length; i ++) {
//     if (i%4 === 0 && i%6 === 0) {
//         console.log("POPBANG")
//     } else if (i%4 === 0) {
//         console.log("POP")
//     } else if (i%6 === 0){
//         console.log("BANG")
//     } else {
//         console.log(i)
//     }

// }
// 
// const carrello = {
//   prodotto1: {
//     nome: "Laptop",
//     prezzo: 999.99,
//   },
//   prodotto2: {
//     nome: "Smartphone",
//     prezzo: 499.99,
//   },
//   prodotto3: {
//     nome: "Tablet",
//     prezzo: 299.99,
//   }
// }
// function somma() {
//     let tot = carrello.prodotto1.prezzo + carrello.prodotto2.prezzo + carrello.prodotto3.prezzo;
//     return tot;
// }

// function sconto() {
//     let tot = somma();
//     let scontato = tot - (tot * 15 / 100);
//     return scontato;
// }

// console.log("Totale carrello:", somma());        
// console.log("Totale con sconto:", sconto());    


//   Un dado “truccato” decide l’esito di un’azione con queste probabilità:
//   - 60%: "Successo"
//   - 30%: "Fallimento"
//   - 10%: "Criticone `lanciaDado()` che restituisce uno dei tre risultati in base alle probabilità.

// function lanciaDado() {
//   let dado = Math.floor(Math.random() * 100) + 1;
//   if (dado <= 60) {
//     console.log("Successo")
//   }
//   else if (dado > 60 && dado <= 90) { console.log("Fallimento") }
//   else if (dado > 90) {console.log("Criticone") }
// }
// lanciaDado()
// const menu = {
//   lunedi: {
//     primo: "Pasta al pomodoro",
//     secondo: "Pollo alla griglia",
//     contorno: "Insalata",
//   },
//   martedi: {
//     primo: "Risotto ai funghi",
//     secondo: "Salmone al forno",
//     contorno: "Verdure grigliate",
//   },
//   mercoledi: {
//     primo: "Lasagne",
//     secondo: "Hamburger",
//     contorno: "Patatine fritte",
//   },
//   giovedi: {
//     primo: "Gnocchi al pesto",
//     secondo: "Scaloppine al limone",
//     contorno: "Spinaci saltati",
//   },
//   venerdi: "chiuso",
//   sabato: {
//     primo: "Pizza Margherita",
//     secondo: "Calzone",
//     contorno: "Mozzarella in carrozza",
//   },
//   domenica: {
//     primo: "Tortellini in brodo",
//     secondo: "Arrosto di vitello",
//     contorno: "Purè di patate",
//   },
// };
// function stampaMenu (giorno){
//   if(giorno === "venerdi"){
//      console.log("Il ristorante è chiuso")
//   } else if(menu[giorno] == undefined){
//     console.log("giorno non definito")
//   } else {console.log(menu[giorno])}
// }
// stampaMenu("giovedi")
// stampaMenu("domenico")
// stampaMenu("venerdi")
// // ESERCIZIO 2

// // Un negozio ha una lista di prodotti:

// const prodotti = [
//   { nome: "Maglietta", prezzo: 20 },
//   { nome: "Scarpe", prezzo: 80 },
//   { nome: "Cappello", prezzo: 15 },
//   { nome: "Giacca", prezzo: 120 },
// ];

// // - Crea un nuovo array contenente solo i prodotti con prezzo superiore a 50.
// // - Stampa il nuovo array.
//  let prodottiNew = prodotti.filter((prodotto)=> prodotto.prezzo >= 50  )
//  console.log(prodottiNew)
//  prodotti.keys 
// ESERCIZIO 4

// // Una piattaforma salva gli ordini della giornata:

// const ordini = [
//   { id: 1, totale: 35 },
//   { id: 2, totale: 120 },
//   { id: 3, totale: 60 },
//   { id: 4, totale: 15 },
// ];

// // - Calcola l’incasso totale della giornata.
// // - Crea un array con solo gli ordini sopra i 50€.
// // - Stampa entrambi i risultati.
 
// let maggiore= ordini.filter((ordine)=> ordine.totale > 50)
// let tot =0
// ordini.forEach((ordine) => tot=ordine.totale + tot)
// console.log(tot)
// console.log(maggiore)
// Un gioco registra i punteggi dei giocatori:

const punteggi = [
  { nome: "Giocatore1", punteggio: 120 },
  { nome: "Giocatore2", punteggio: 450 },
  { nome: "Giocatore3", punteggio: 300 },
  { nome: "Giocatore4", punteggio: 90 },
  { nome: "Giocatore5", punteggio: 600 },
];

// - Trova il punteggio più alto.
// - Crea un nuovo array con i punteggi maggiori di 200.
// - Ordina i punteggi dal più alto al più basso.
// - Stampa tutto in modo leggibile.
console.log(punteggi.filter((punti)=> punti.punteggio >= 200 ))
let ordine=punteggi.sort((a,b)=>b.punteggio - a.punteggio)
console.log(ordine)
console.log(ordine[0])
