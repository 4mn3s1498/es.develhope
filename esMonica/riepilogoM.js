// Esercizi di riepilogo

// 1. Dato il seguente array di numeri; crea una funzione che usa un ciclo for per effettuare il console.log di ogni valore presente nell'array.

// const numbers = [13, 24, 43, 44, 54];
// function arrayFor(numbers) {

//   for (let i = 0; i < numbers.length; i++)
//     console.log(numbers[i])
//   return
// }
// arrayFor(numbers)

// 2. Completare la seguente funzione chiamata "numberExists", essa riceve due parametri di cui uno è un array. La funzione deve controllare se il primo parametro è presente nell'array e restituire un messaggio indicante se quell'elemento è presente o meno. Spiega il metodo che hai scelto per risolvere l'esercizio.

// function numberExists(number, array) {
//   if (array.find((num) => num === number)) {
//     return ` ${number} esiste nell'array`
//   } else { return ` ${number} non esiste nell'array` }
// }
// let array = [8, 48, 5, 19, 0, 86, 9]
// console.log(numberExists(18, array))
//ho utilizzato il controllo if perchè la traccia chiede di verificare se il parametro è realmente presente nell'array e,a second del risultato, risponde .

// 3. Scrivi un oggetto chiamato "personalInfo" che rappresenti le tue informazioni personali, le proprietà sono: name, surname, age, hairColor, eyesColor, hobbies ( array di stringhe ).

let personaInfo = {
  nome: "Eleonora",
  cognome: "Gagliardi",
  eta: "27",
  coloreCapelli: "marroni",
  coloreOcchi: "marroni",
  hobbies: ["gattara", "tatuaggi", "musica", "dormire", "cibo"]
}

// 4. Crea una funzione chiamata "orderedHobbies" che accetta come parametro un oggetto. Essa deve verificare la presenza della proprietà hobbies all'interno dell'oggetto e ordinare gli hobby in ordine alfabetico restituendo un nuovo array.

function orderHobbies (oggetto){
console.log("hobbies" in personaInfo)
  let hobbys= personaInfo.hobbies.sort()
 console.log(hobbys)
}
orderHobbies(personaInfo)

// 5. Istanzia una classe chiamata "Persona" che abbia come proprietà name, surname, age, hairColor, eyesColor, hobbies ( array di stringhe ) e un metodo chiamato "introduce" che restituisca una stringa con le informazioni della persona. Crea un'istanza della classe e invoca il metodo introduce.
class Persona {
  constructor(nome, cognome, eta, coloreCapelli, coloreOcchi, hobbies) {
    this.nome = nome;
    this.eta = eta;
    this.cognome = cognome;
    this.coloreCapelli = coloreCapelli;
    this.coloreOcchi = coloreOcchi
    this.hobbies = hobbies
  }
  introduce() {
    return `Ciao, mi chiamo ${this.nome} ${this.cognome}, ho ${this.eta} anni, i capelli ${this.coloreCapelli} e gli occhi ${this.coloreOcchi} inoltre ho questi hobbies ${this.hobbies}`
  }
}
let persona1 = new Persona("Eleonora", "Gagliardi", 27, "marroni", "marroni", ["gattara", "musica"])
// console.log(persona1.introduce())

// 6. Prova a duplicare l'oggetto dell'esercizio precedente senza istanziarlo nuovamente. Spiega il metodo che hai scelto e quali sono i suoi vantaggi.

let newPersona = Object.assign({}, persona1);
// console.log(newPersona);
// console.log(newPersona === persona1);
//ho usato il metodo Object.assign perchè lo ricordavo dagli esercizi in piattaforma, ti consente di creare una copia dell'oggetto .

// 7. Crea una funzione "mergeArray" che accetti come parametri due array e restituisca un nuovo array che contenga tutti gli elementi dei due array, senza modificare i due array originali. Assicurati che nel merge non ci siano elementi duplicati. Spiega il metodo che hai scelto per risolvere l'esercizio.
const primo = [1, 9, 8, 7, 6, 5, 87, 93]
const secondo = [2, 3, 4, 5]
function mergeArray(arr1, arr2) {
  let mergeArr = [...new Set([...arr1, ...arr2])];
  return mergeArr
}

// console.log(mergeArray(primo,secondo))

// 8. Dato il seguente array di oggetti, crea una funzione  "login" che accetti come parametro un username o email, e una password e verifichi se esiste un utente con quelle credenziali. Se esiste, restituisci il messaggio "Login effettuato con successo", altrimenti restituisci "Credenziali non valide".

const users = [
  {
    username: "topolino",
    email: "topolino@example.com",
    password: "minnie",
  },
  {
    username: "pippo",
    email: "pippo@example.com",
    password: "pluto",
  },
];
function login(usname, email, pass) {
  if (users.find((user) => user.username === usname
    ||
    user.email === email
    &&
    user.password === pass
  )) {
    return "Login effettuato con successo"
  } else {
    return "Credenziali non valide"
  }

}
//  console.log(login("pipo","ippo@example.com", "puto"))
//  console.log(login("pippo","pippo@example.com", "pluto"))

// 9. Crea una funzione "register" che accetti come parametro un username e una password e aggiunga un nuovo utente all'array degli utenti. La funzione deve verificare che l'email non sia già presente nell'array, in caso contrario deve restituire un messaggio di errore. Se l'utente viene aggiunto con successo, restituisci il messaggio "Utente registrato con successo".
function register(usname, email, pass) {
  if (users.find(user => user.email === email)) {
    return "Errore 199"
  }
  else {
    let newUser = {
      username: usname,
      email: email,
      password: pass
    }
    users.push(newUser);
    return "utente registrato con successo"
  }

}
console.log(register("lilly", "lilly@libero.it", "noooo"))

// 10. Definisci una funzione "acquista" che simuli l'acquisto di prodotti dal catalogo products.
// La funzione deve accettare come parametri la categoria e il numero di unità che l'utente vuole acquistare di quel prodotto.
// Esegui le seguenti operazioni all'interno della funzione:
// - Verifica se la categoria esiste all'interno del catalogo products, se non esiste restituisci un messaggio di errore.
// - Se la categoria esiste, verifica se la disponibilità del prodotto è sufficiente a coprire la quantità richiesta, altrimenti restituisci un messaggio di errore che indichi la quantità disponibile in stock.
// - Se la categoria esiste e la disponibilità è sufficiente, calcola il prezzo totale dell'acquisto e restituisci un messaggio con il totale da pagare.
// - Aggiorna lo stock del prodotto sottraendo la quantità acquistata, se questa è pari a 0, imposta la proprietà avaible su false.

const products = [
  {
    id: "p1",
    nome: "Abito",
    categoria: "abiti",
    prezzo: 50,
    avaible: true,
    stock: 10,
  },
  {
    id: "p2",
    nome: "Smartphone",
    categoria: "elettronica",
    prezzo: 300,
    avaible: true,
    stock: 5,
  },
  {
    id: "p3",
    nome: "Pizza",
    categoria: "cibo",
    prezzo: 8,
    avaible: true,
    stock: 20,
  },
  {
    id: "p4",
    nome: "Gonna",
    categoria: "abiti",
    prezzo: 40,
    avaible: true,
    stock: 15,
  },
  {
    id: "p5",
    nome: "Laptop",
    categoria: "elettronica",
    prezzo: 800,
    avaible: true,
    stock: 3,
  },
  {
    id: "p6",
    nome: "Pasta",
    categoria: "cibo",
    prezzo: 5,
    avaible: true,
    stock: 30,
  },
  {
    id: "p7",
    nome: "Giacca",
    categoria: "abiti",
    prezzo: 100,
    avaible: false,
    stock: 0,
  },
];
function acquista(categoria, qta) {
const product = products.find(p => p.categoria === categoria)
  if (!product) {
    return "Errore, la categoria non è disponibile"
  }

  if (qta <= product.stock) {
    let totale = product.prezzo * qta
    totale= aggiungiSconto(categoria,qta,totale)

    product.stock = product.stock - qta
    if (product.stock === 0) {
      product.avaible = false
    }
    return `Carrello = ${totale}
    Rimangono ${product.stock} unità disponibili.`
  }
  else {
    return `Errore. Abbiamo ${product.stock} unità disponibili.`
  }
}
console.log(acquista("abiti", 10))
console.log(acquista("cibo", 35))
//11. Definisci una funzione 'aggiungiSconto' che ricalcoli il prezzo totale di un acquisto applicando eventuali sconti in base alla categoria del prodotto acquistato. Gli sconti da applicare sono i seguenti:
function aggiungiSconto (categoria, qta, totale){
  if(categoria === "abiti" && qta > 3){
    return totale - (totale * 10 /100)  }
    else if(categoria === "elettronica") {
      return totale - (totale * 5 /100)
} else if (categoria === "cibo"){
  return totale
}
}
// Abiti: Se l'utente acquista più di 3 pezzi, applica uno sconto del 10% sul totale
// Elettronica: Applica sempre uno sconto del 5% sul totale, indipendentemente dalla quantità
// Cibo: Nessuno sconto applicato

// Utilizza questa funzione all'interno della funzione 'acquista' per calcolare il prezzo totale dell'acquisto dopo l'applicazione degli sconti.

//12. Definisci una funzione 'start' che consente di simulare più acquisti e ritorna il totale complessivo.

// BONUS: Prova a gestire eventuali errori che potrebbero verificarsi durante gli acquisti, come ad esempio la mancanza di stock o l'inserimento di una categoria non valida, se uno degli acquisti fallisce, la funzione 'start' deve restituire un messaggio di errore.
