// function visualizzaOrologio() {
//   const orarioCorrente = new Date();
//   const ore = orarioCorrente.getHours();
//   const minuti = orarioCorrente.getMinutes();
//   const secondi = orarioCorrente.getSeconds();
  
//   console.log(`Ora attuale: ${ore}:${minuti}:${secondi}`);
// }
// setInterval(visualizzaOrologio, 1000)

// Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
// Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
// Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
// Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.
// let tempoRimanente = 10;
//  console.log("Conto alla rovescia in corso ...")
//  console.log(tempoRimanente)
// function contoAllaRovescia() {
//  tempoRimanente= tempoRimanente - 1
//   console.log(tempoRimanente)
//   if(tempoRimanente===0){
//     console.log("Conto alla rovescia terminato!")
//     clearInterval(intervalId)
//   }
// } 
//  let intervalId= setInterval(contoAllaRovescia,1000)
 
//  Utilizza setTimeout per chiamare la funzione "mostraPromemoria" dopo un ritardo di 5 secondi.
// Prima che scadano i 5 secondi stampa in console: "Il promemoria è in fase di impostazione".
// function mostraPromemoria() {
//   console.log("Promemoria: È ora di fare una pausa!");
// }
// console.log("Il promemoria è in fase di impostazione")
// setTimeout(()=> {
//     mostraPromemoria()
// }, 5000)

// Implementa la funzione lanciaDadi che:

// Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
// Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.
// Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.
// Prima dello scadere dei 2 secondi stampa in console il messaggio ""Lancio dei dadi in corso..."

// Per la generazione casuale dei numeri dei dadi servirà utilizzare i metodi Math.floor() e Math.random()


// console.log("Lancio dei dadi in corso...")
// function lanciaDadi(){
//  let dado1 = Math.floor((Math.random() * 6) + 1);
//  let dado2 = Math.floor((Math.random() * 6) + 1);
// return `Dado 1 = ${dado1}, Dado 2 = ${dado2}`
// }
// setTimeout(()=>{
//   console.log(lanciaDadi())
// }, 2000)

//  Scrivi una funzione chiamata doubleArray che accetta un array e una funzione di callback come argomenti.
// doubleArray deve applicare la funzione di callback a ciascun elemento dell'array e restituire un nuovo array con i valori trasformati.

function doubleArray(arr, callback) {
  return arr.map(callback);
}

function doubleValue(num) {
  return num * 2;
}

function double (num,m){
    return num * m
}
 console.log(double(3,5))

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers, doubleValue);
let double2 = doubleArray(numbers,(num)=> double(num,6))
let ciao=numbers.map((num)=> double(num,6))
// console.log(ciao)
// console.log(double2)
// console.log(doubledNumbers);

//altro esercizio 

function delay(callback, delayTime) {
  setTimeout(callback, delayTime);
}
function sayHi() {
  console.log("Hi, there!");
}
// delay(sayHi, 2000); 

// Scrivi una funzione chiamata filterArray che accetta un array e una funzione di callback come argomenti. -La funzione callback deve filtrare e restituire i numeri pari passati come argomento alla funzione filterArray
// filterArray dovrebbe restituire un nuovo array contenente solo gli elementi per i quali la funzione di callback restituisce true.
function filterArray(arr, callback) {
 return arr.filter(callback)
}

function isEven(num) {
    return num %2 === 0

}

// const numbers = [1, 2, 3, 4, 5, 6,7,8,9,12,25,221343538,];
// const evenNumbers = filterArray(numbers, isEven);
// console.log(evenNumbers); // Should output [2, 4, 6]

// Crea una funzione che accetta due numeri come argomenti e una funzione di callback.
// La funzione dovrebbe eseguire un'operazione matematica sui numeri e passare il risultato alla funzione di callback.
// Ad esempio, puoi creare una funzione per aggiungere due numeri e passare una funzione di callback che visualizza il risultato.

function performOperation(a, b, callback) {
let risultato=a*b
// callback(risultato)
}

function displayResult(result) {
     console.log("Il risultato è:", result);
}

// performOperation(5, 3, displayResult);

// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.
function performOperation(a, b, callback) {
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Stai sbagliando qualcosa");
        }
        let risultato = a * b;
        callback(null, risultato); 
    } catch (errore) {
        callback(errore.message, null);
    }
}

function displayResult(errore, risultato) {
    if (errore) {
        console.log("Errore:", errore);
    } else {
        console.log("Il risultato è:", risultato);
    }
}



// performOperation(5, 3, displayResult);
// performOperation("alt", 3, displayResult);


// Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.

// function fetchDataFromAPI(callback) {
//   console.log("Ricerca informazioni in corso")
//   setTimeout(() => {
//     let dato={ name: "John", age: 30 }
//     callback(dato)
// },3000)

// }

// function handleData(data) {
//     console.log(data)
// }

// fetchDataFromAPI(handleData);

// Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.

function runCallbacks(callbacks) {
 callbacks.forEach((elemnt) =>elemnt())
  }
   
function firstCallback() {
  console.log("Prima");
}

function secondCallback() {
  console.log("Seconda");
}

function thirdCallback() {
  console.log("Terza");
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
// runCallbacks(callbackArray);

//Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
//La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        console.log("Ricerca informazioni in corso...");
        setTimeout(() => {
            const successo = true; 
            if (successo) {
                const dato = { name: "John", age: 30 };
                resolve(dato); 
            } else {
                reject("Errore nel recupero dati"); 
            }
        }, 3000);
    });
}
// fetchDataFromAPI()
//     .then((dati) => {
//         console.log("Dati ricevuti:", dati);
//     })
//     .catch((errore) => {
//         console.log("Errore:", errore);
//     });

// -Crea una catena di Promises per simulare un'operazione asincrona in più fasi. -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "John" });
        }, 1000);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Post 1', 'Post 2', 'Post 3']);
        }, 1000);
    });
}

// fetchUserData()
//     .then(user => {
//         return fetchUserPosts(user.id)
//             .then(posts => ({ user, posts })); 
//     })
//     .then(({ user, posts }) => {
//         console.log("Nome utente:", user.name);
//         console.log("Post:", posts);
//     });

// -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.

function example() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const caso=true;
            if(caso){
resolve(("hi guys"));
            }else {
            
            reject(("ERROR"))}
        }, 2000);
    });
}
// example()
// .then(()=> console.log("hi guys"))
// .catch(()=> console.log("ERROR"))

// -Crea una Promise che simula il recupero dei dati da un'API. A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore. -Crea una variabile chiamata success con un valore numerico random da 0 a 0.5 -La chiamata avrà successo con il messaggio Data retrieved successfully se il valore random è inferiore a 0.5 altrimenti fallisce con il messaggio Error: Failed to fetch data

function fetchDataFromAPI() {
  return new Promise ((resolve,reject) => {
    let success= (Math.random() * 1);
    setTimeout(()=>{
   if(success< 0.5){
    resolve("Data retrieved successfully")
   }else {
    reject("Error: Failed to fetch data")
   }
    })

  })
}

// fetchDataFromAPI()
// .then(resolve => console.log("Data retrieved successfully"))
// .catch(reject => console.log("Error: Failed to fetch data"))

// Convertire la seguente funzione basata su callback in una funzione basata su Promise.

// function callback_BasedFunction(arg1, arg2, callback) { 
//   setTimeout(() => { 
//   const result = arg1 + arg2; 
//   if (result % 2 !== 0) { 
//   callback(null, result); 
//   } else { 
//   callback(new Error('Result is not odd!'), null); } }, 1000);
//   }
function promiseBasedFunction(arg1, arg2) {
  return new Promise((resolve, reject) => {
    const result=arg1+arg2;
    setTimeout(()=>{
        if(result % 2 !== 0){
            resolve(result)
        } else {
            reject('Result is not odd!')
        }

    },1000)
    
  }); 
}
// promiseBasedFunction(3,5)
// .then(result=> console.log(result))
// .catch(error=>console.log(error))

// Implementare le funzioni fetchPersonById e fetchJobById, le quali dato un id devono restituire rispettivamente:
// La persona che ha come identificativo l'id passato come parametro
// Il tipo di lavoro che ha come identificativo l'id passato come parametro
// Infine implementare il codice necessario che si occupa di stampare in console la persona e il tipo di lavoro trovato. N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe le Promise sono state risolte.
const persons = [
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Rossi',
      age: 25
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Verdi',
      age: 32
    },
    {
      id: 3,
      firstName: 'Giovanni',
      lastName: 'Rossi',
      age: 35
    }
  ];
  
  const jobs = [
    {
      id: 1,
      jobTitle: 'CEO'
    },
    {
      id: 2,
      jobTitle: 'Project Manager'
    },
    {
      id: 3,
      jobTitle: 'Developer'
    }
  ];
  
  function fetchPersonById(id){
    return promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
      const person = persons.find(person => person.id == id);
      if (person){
        return resolve(person)
      } else {
        return reject(`No person with id ${id}`)
      }
    },3000)
    })
  };
  function fetchJobById(id){
    return promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
      const job = jobs.find(job => job.id == id);
      if (job){
        return resolve(job)
      } else {
        return reject(`No job with id ${id}`)
      }
    },2000)
    })
  }
// Promise.all([fetchPersonById(2), fetchJobById(3)])
// .then(([person, job]) => {
//     console.log(person,job)
// })

// La funzione caricamentoDati simula il caricamento di dati asincroni con un ritardo di 2 secondi!
// Implementa la funzioneottieniDatiutilizzando await per attendere il caricamento dei dati, quindi visualizza i dati ottenuti in console.

function caricamentoDati() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
}
async function ottieniDati() {
    try { let risultato= await caricamentoDati()
        console.log(risultato)

        
    } catch (error) {
        console.error(error)
        
    }}
// }
// ottieniDati()
// ipmlementa la funzione asincrona "ottieniDati"

// In questo esercizio andremo a simulare il caricamento di moduli di un veicolo spaziale in modo asincrono e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!

// La funzione "caricaModulo" ritorna una promise simulando il caricamento di un modulo con un ritardo di 2 secondi!

// Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.

// Alla fine, quando tutti i moduli sono stati caricati con successo, stampa in console ""Veicolo spaziale pronto per il l

function caricaModulo(modulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}

async function lanciaVeicoloSpaziale() {
  try {let a= await caricaModulo("A")
let b= await caricaModulo("B")
let c= await caricaModulo("C")
console.log("Veicolo spaziale pronto per il lancio!")
    
  } catch (error) {
    console.error(error)
    
  }  

}
// lanciaVeicoloSpaziale();

// In questo esercizio, come nel precendente andremo a simulare il caricamento di moduli di un veicolo spaziale in modo asincrono e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!

// ATTENZIONE : il caricamento dei moduli in questo esercizio non sempre potrebbe riuscire!

// Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.

// Gestisci eventuali errori nel caricamento dei moduli stampando in console "Impossibile lanciare il veicolo spaziale a causa di errori nei moduli."

// Alla fine, se tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".

function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
  });
}
async function lanciaVeicoloSpaziale() {
  try {let a= await caricaModulo("A")
let b= await caricaModulo("B")
let c= await caricaModulo("C")
console.log("Veicolo spaziale pronto per il lancio!")
    
  } catch (error) {
    console.error(error)
    
  }  

}
lanciaVeicoloSpaziale()