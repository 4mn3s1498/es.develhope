// class Persona {
//   constructor(nome, eta) {
//     this.nome = nome;
//     this.eta = eta;
//   }
//   saluta() {
//     console.log("Ciao sono " + this.nome);
//   }
// }
// const p1 = new Persona("Luca", 30);
// p1.saluta();
// const p2= new Persona("giorgio", 32);
// p2.saluta();
 class Libro {
  constructor(titolo,autore,anno,disponibile){
 this.titolo= titolo;
  this.autore= autore;
  this.anno= anno;
  this.disponibile= true;
}
  presta () {this.disponibile = false}
    restituisci (){this.disponibile= true }
      descrizione () { console.log("Il libro " + this.titolo + " è " + (this.disponibile ? "disponibile" : "non disponibile"));}
 }
 const libro1= new Libro("death note","non lo so", "2001",)
 const libro2= new Libro("libro1","maccio capatonda", "2010",)
 const libro3= new Libro("la madonna", "i bestemmiatori", "1900",)
 

 let biblioteca= [ libro1, libro2, libro3] ;
 for(let key in biblioteca) {
  Libro.  bdescrizione
}  
libro1.presta()

  console.log(libro1,libro2,libro3)