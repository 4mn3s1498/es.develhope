function random() {
   let number = Math.floor(Math.random() * 100);
   return number;
}
let nrandom = random();

if (nrandom <= 10) {
   console.log("goditi la giornata");
}
else {
   if (random() <= 30) {
      console.log("pioverà");
   } else {
      console.log("oggi sarà nuvoloso");
   }

//    const persona1 = {
//       nome: "Alice",
//       eta: 30,
//    };
//    const persona2 = {
//       nome: "Bob",
//       eta: 14,
//    };
//    function verificaEta(eta) {
//       if (eta >= 18) {
//          return ("è maggiorenne, può accedere al sito.")
//       }
//       else {
//          return ("è minorenne, non può accedere al sito.")
//       }

//    }
// console.log((persona1.nome) + verificaEta(persona1.eta))
// console.log((persona2.nome) + verificaEta(persona2.eta))
// }
