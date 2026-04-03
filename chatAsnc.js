
function saluta(nome, callback) {
  console.log(callback(nome))
}

function stampaNome(nome) {
  return `Ciao ${nome}`;
}
// saluta("Luca", stampaNome);

function somma(a, b, callback) {
  let risultato= a + b 
  callback(risultato)
  return
}

function mostraRisultato(risultato) {
  console.log("Risultato:", risultato);
}
// somma(2, 3, mostraRisultato);

function controllaNumero(n, callback) {
  if(n%2 !== 0){
    console.log("Non fare nulla")
  } else {
    callback(n)
  }
}

function numeroPari(n) {
  console.log(n, "è pari");
}

// controllaNumero(4, numeroPari); // deve stampare
// controllaNumero(5, numeroPari); // NON deve stampare

function processaTesto(testo, callback) {
 let text= callback(testo)
  console.log(text)
}

function maiuscolo(testo) {
  return testo.toUpperCase();
}

// processaTesto("ciao", maiuscolo);

function filtraNumeri(array, callback) {

  for(let i=0; i < array.length; i++)
    if(callback(array[i])) {
        console.log(array[i])
    }
}

function maggioreDiDieci(n) {
  return n > 10;
}

// filtraNumeri([5, 12, 8, 20], maggioreDiDieci);

function getNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5);
        }, 1000);
    });
}
function doubleNumber(num) {
    // deve restituire una Promise
    return new Promise((resolve)=> {
      setTimeout(()=>{
        resolve(num*2)
      },2000)
    })
}
// getNumber()
//   .then(num => doubleNumber(num))
//   .then(result => console.log(result));
const numeri = [1, 2, 3, 4];
const validi = [2, 3];

// 👉 Scrivi una funzione che controlli:
// “tutti i numeri di validi esistono dentro numeri?”
// ⚠️ Vincoli (importanti)
// devi usare every
// dentro devi usare some

function prova(numeri, validi){
  let esiste=validi.every((n)=>{
return numeri.some(num => num === n)

  }) 
  return console.log(esiste)
}
// prova(numeri,validi)

const utenti = [
  { id: 1, nome: "Luca" },
  { id: 2, nome: "Anna" }
];

const richieste = [
  { userId: 1 },
  { userId: 3 }
];
// Obiettivo Scrivi una funzione che controlli: “Tutti gli userId in richieste esistono dentro utenti?”
// Se sì → ritorna true
// Se no → ritorna false
// ⚠️ Vincoli / trappole comuni
// Non usare utenti.id → utenti è un array
// Devi usare every per tutti gli elementi di richieste
// Dentro ogni elemento di every, usa some per cercare nell’array utenti
// Non dimenticare il return dentro every

function control(utenti,richieste){
  let ciSono= richieste.every((elemnt)=>{
return utenti.some((us)=> us.id === elemnt.userId)
  })
  return ciSono
}
// console.log(control(utenti, richieste));

// Crea un nuovo array che contenga per ogni prodotto nell’ordine:
// {
//   prezzo,
//   quantita,
//   totale // = prezzo * quantita
// }
// Calcola il totale finale del carrello usando reduce.
// ⚠️ Vincoli / trappole comuni
// Usa map per creare il nuovo array
// Dentro map, trova il prodotto giusto nel catalogo con find
// Ricorda di calcolare totale come prezzo * quantita
// Usa reduce per sommare tutti i totali
// Fai attenzione a non confondere prodottoId con id
const prodotti = [
  { id: "p1", prezzo: 10 },
  { id: "p2", prezzo: 20 }
];

const ordine = [
  { prodottoId: "p1", quantita: 2 },
  { prodottoId: "p2", quantita: 3 }
]; 
function piango(prodotti,ordine){
  let nuovp=ordine.map(el1 => {
  let prod = prodotti.find(el2 => el1.prodottoId === el2.id);
  return {
    prezzo: prod.prezzo,
    quantita: el1.quantita,
    totale: prod.prezzo * el1.quantita
  }
})
let tot= nuovp.reduce((acc,curr) => acc+curr.totale,0)
return {nuovp, tot}}

// console.log(piango(prodotti,ordine))

const catalogo = [
  { id: "a1", nome: "Penna", prezzo: 2 },
  { id: "a2", nome: "Quaderno", prezzo: 5 },
  { id: "a3", nome: "Zaino", prezzo: 35 },
  { id: "a4", nome: "Calcolatrice", prezzo: 15 },
  { id: "a5", nome: "Riga", prezzo: 1 },
];

const carrello = [
  { prodottoId: "a1", quantita: 3 },
  { prodottoId: "a3", quantita: 1 },
  { prodottoId: "a4", quantita: 2 },
  { prodottoId: "a5", quantita: 5 },
];
// Obiettivo
// Crea un nuovo array con nome, prezzo, quantita e subtotale per ogni prodotto nel carrello
// Calcola il totale finale del carrello
function diNuovo(catalogo,carrello){
  let nuovo= carrello.map(arr1 => {
  let prod = catalogo.find(arr2 => arr1.prodottoId === arr2.id);
    return{
    nome: prod.nome,
    prezzo: prod.prezzo,
    quantita: arr1.quantita,
    tot: prod.prezzo*arr1.quantita
  }
  })
   let totale= nuovo.reduce((acc,curr)=>acc+curr.tot,0)
   return {nuovo, totale}
}
console.log(diNuovo(catalogo,carrello))
// Vincoli
// Usa map per creare il nuovo array
// Dentro map, usa find per prendere i dati dal catalogo
// Calcola subtotale = prezzo * quantita
// Usa reduce per calcolare il totale finale