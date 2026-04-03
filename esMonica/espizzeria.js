const menu = [
  { id: "m1", nome: "Margherita", prezzo: 6 },
  { id: "m2", nome: "Diavola", prezzo: 7.5 },
  { id: "m3", nome: "Patatine", prezzo: 5 },
  { id: "m4", nome: "Bufala", prezzo: 8.5 },
];

const clienti = [
  { id: "c1", nome: "Luca", vip: false },
  { id: "c2", nome: "Sara", vip: true },
  { id: "c3", nome: "Amina", vip: false },
];

const ordini = [
  {
    id: "o1",
    clienteId: "c2",
    items: [
      { menuId: "m1", qty: 2 },
      { menuId: "m2", qty: 1 },
    ],
    coupon: "PROMO10",
  },
  {
    id: "o2",
    clienteId: "c1",
    items: [{ menuId: "m3", qty: 3 }],
    coupon: null,
  },
  {
    id: "o3",
    clienteId: "c3",
    items: [
      { menuId: "m4", qty: 1 },
      { menuId: "m1", qty: 1 },
    ],
    coupon: "PROMO2",
  },
];

const couponSpec = {
  PROMO10: { type: "percent", value: 0.1 }, // -10% sul totale
  PROMO2: { type: "fixed", value: 2 }, // -2 euro sul totale
};

const regole = {
  scontoVip: 0.05, // 5% sul totale (prima del coupon)
};
const totaleOrdine = (ordine) => {

  const { items, clienteId, coupon } = ordine
  let totale = 0

  items.forEach((item) => {
    const piatto = menu.find((x) => item.menuId === x.id)
    totale += piatto.prezzo * item.qty
  })

  const cliente = clienti.find((y) => y.id === clienteId)

  if (cliente.vip) {
    let sconto = totale * regole.scontoVip
    totale = totale - sconto
  }

  if (coupon && coupon in couponSpec) {

    if (couponSpec[coupon].type === "percent") {
      let sconto = totale * couponSpec[coupon].value
      totale = totale - sconto
    }

    else if (couponSpec[coupon].type === "fixed") {
      totale = totale - couponSpec[coupon].value
    }

  }

  return totale
}

// console.log(totaleOrdine(ordini[0]))

function elenco(cliente) {
  if (cliente) {
    const { id } = cliente;

    let ordiniEffettuati = ordini.filter((ordine) => ordine.clienteId === id)

    let dettaglioOrdine = "Lista Ordini "

    ordiniEffettuati.forEach((ordine) => {
      let ogg = totaleOrdine(ordine)

      dettaglioOrdine += ` Totale ordine: ${ogg}`
    });

    return {
      ordini: ordiniEffettuati,
      dettaglio: dettaglioOrdine
    }

  } else {
    return "questo cliente non esiste"
  }
}

// console.log(elenco(clienti[0]))
/* 
   TASKS
 */

// 1. Crea una funzione che accetti un ordine e calcoli il totale da pagare, applicando eventuali sconti VIP e coupon. 
// La funzione deve restituire un oggetto con il totale e una descrizione dettagliata del calcolo.

// 2. Crea una funzione che accetti un cliente e restituisca un elenco di tutti gli ordini effettuati da quel cliente,
//  con i dettagli di ogni ordine (nome del menu, quantità, prezzo unitario, totale parziale).

// 3. Crea una funzione che accetti un menuId. La funzione restituisce il numero totale di porzioni vendute di quel menu,
//  sommando tutte le quantità dagli ordini.

function totalePorzioni(men) {
let somma=0;
  ordini.forEach((ordine) => {
    const { items, clienteId, coupon } = ordine
    items.forEach((item)=>{ 
  if(item.menuId === men){
    somma= somma + item.qty
    }

    })
  })
return somma
}
// console.log(totalePorzioni("m1"))

// 4. Crea una funzione che aggiunga un nuovo cliente alla lista dei clienti, **assicurandosi che l'id sia univoco**.
// La funzione deve restituire il nuovo cliente creato.

function addCliente(cliente ){
let giaInserito= false

  clienti.forEach(( {id} ) => {
    if(id === cliente.id) {
      giaInserito=true;
      console.log("Id già presente")
    }
  })
  let doppio=clienti.find(({id})=> id===cliente.id )
  if(doppio === undefined){ 
    clienti.push(cliente)
  return cliente}

   if(giaInserito === false){ 
     clienti.push(cliente)
  return cliente}
}
// console.log(addCliente({ id: "c4", nome: "Amin", vip: false } ))

// 5. Crea una funzione che accetti come paramtro un clienteId e un menuId e aggiunga un nuovo ordine per quel cliente con
// una porzione di quel menu, applicando automaticamente lo sconto VIP se il cliente è VIP. La funzione deve restituire
//  il nuovo ordine creato.
function pippo(clienteId, menuId){
let client= clienti.find((c)=> c.id === clienteId)
let menuu= menu.find((m)=> m.id === menuId)
let nuovoOrdine = {
  clienteId: clienteId,
  items: [{ menuId: menuu.id, qty: 1 }],
  totale: menuu.prezzo
};
if(client.vip){
   let sconto = nuovoOrdine.totale * regole.scontoVip
    nuovoOrdine.totale=nuovoOrdine.totale - sconto
  }
  return nuovoOrdine

}
// console.log(pippo("c1","m2"))
// console.log(pippo("c2","m3"))

// 6. Crea una funzione riepilogo che restituisca un oggetto con il totale incassato, il numero di ordini effettuati
// e il menu più venduto (quello con più porzioni vendute).
function pluto(){
  
}
