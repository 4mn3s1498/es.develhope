const pkmn= document.getElementById("pkmn");
const form= document.getElementById("form");
const input= document.getElementById("input");

async function fetchPokemon(nome) {
    try {
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
        const data= await response.json()
        return data
    } catch (error) {
        console.error(error)
        
    }
    
}
async function mostraPokemon(nome) {
    try {
        const pokemon= await fetchPokemon(nome)
        const card=document.createElement("div")
        const text=document.createElement("h2")
        const img=document.createElement("img")
        const skill= document.createElement("p")

        card.classList.add("card")
        text.innerText=pokemon.name
        img.src=pokemon.sprites.front_default
        img.alt=pokemon.name
        let abilita=pokemon.abilities.map((x)=> x.ability.name).join("-")
        skill.textContent=abilita
        pkmn.innerHTML=""

        card.appendChild(text)
        card.appendChild(img)
        card.appendChild(skill)
        pkmn.appendChild(card)
        
    } catch (error) {
        console.error(error)
    }
    
}
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const inpvalue= input.value.toLowerCase().trim()
    mostraPokemon(inpvalue)
    input.value= ""
})