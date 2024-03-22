console.log('players loaded');

const container = document.querySelector('.container');

fetch('/players')
.then(myData => myData.json())
.then(jsonData => showCards(jsonData));

function showCards(players) {
    console.log(players);

    let htmlCode = '';
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        htmlCode += createCard(player);
    }
    container.innerHTML = htmlCode;

}

function createCard(player){
    const card = `
        <div class="card">
            <h2>${player.name}</h2>
            <img src="${player.image}" />
            <p>${player.age}</p>
        </div>
    `;
    return card;

}