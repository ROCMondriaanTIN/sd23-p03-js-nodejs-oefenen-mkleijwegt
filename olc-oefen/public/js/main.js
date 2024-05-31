console.log('Main loaded');

const cardContainer = document.querySelector('.card-container');
const chart1 = document.querySelector('.chart-1');
const chart2 = document.querySelector('.chart-2');

fetch('/games')
    .then(data => data.json())
    .then(jsonData => showData(jsonData));

function showData(jsonData){
    showCards(jsonData);
    showCharts(jsonData);
}

function showCharts(games){
    //const platforms = ['PC', 'Web Browser', 'Console', 'Mobile'];
    //const numberOfGamesPerPlatform = [12, 33, 67, 4];
    const platformMap = new Map();
    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        if(!platformMap.has(game.platform)){
            platformMap.set(game.platform, 0);
        }
        platformMap.set(game.platform, platformMap.get(game.platform) + 1);
    }
    console.log(platformMap);

}

function showCards(games){

    let htmlCode = '';
    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        htmlCode += createCard(game);
    }
    cardContainer.innerHTML = htmlCode;
}

function createCard(game){
    const card = `
    <div class="col-md-4">
        <div class="card">
            <img class="card-img-top" src="${game.thumbnail}" alt="Title" />
            <div class="card-body">
                <h4 class="card-title">${game.title}</h4>
                <p class="card-text">Text</p>
            </div>
        </div>
    </div>
    `;
    return card;
}