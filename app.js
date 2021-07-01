// https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const base = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i < 899; i++) {
    let pokemon = document.createElement("img");
    pokemon.src = `${base}${i}.png`
    container.appendChild(pokemon);
}