console.log('main loaded');

const main = document.querySelector('.main');

fetch('/pokemon')
.then(data => data.json())
.then(myJsonData => showPokemon(myJsonData));

function showPokemon(myJsonData){
    let htmlCode = '';
    for (let i = 0; i < myJsonData.length; i++) {
        const pokemon = myJsonData[i];
        htmlCode += createPokeCard(pokemon);
    }
    main.innerHTML = htmlCode;

}

function createPokeCard(pokemon){
    //the substring function calls on name are there to make sure the first letter is a capital.
    const card = `<div class="pokemon">
        <h2>${pokemon.name.substring(0, 1).toUpperCase() + pokemon.name.substring(1, pokemon.name.length)}</h2>
        <p>${pokemon.type}</p>
        <img src="${pokemon.img}" width="150px"/>
    </div>`;
    return card;
}