console.log('Main loaded');

const cardContainer = document.querySelector('.card-container');
const chart1 = document.querySelector('.chart-1');
const chart2 = document.querySelector('.chart-2');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function(){

    const searchValue = searchInput.value;

    fetch(`https://api.coincap.io/v2/assets/${searchValue}/history?interval=d1`)
        .then(data => data.json())
        .then(jsonData => showDataByTime(jsonData));
});

fetch('https://api.coincap.io/v2/assets')
    .then(data => data.json())
    .then(jsonData => showData(jsonData));



function showDataByTime(cryptoDateTimeData){
    const labels = [];
    const data = [];
    for (let i = 0; i < cryptoDateTimeData.data.length; i++) {
        const crypto = cryptoDateTimeData.data[i];
        labels.push(crypto.date);
        data.push(crypto.priceUsd);
    }
    console.log(labels);
    console.log(data);
    createChart(chart2, labels, data, 'Crypto by date', 'line');
}


function showData(cryptos){
    console.log(cryptos);
    const labels = [];
    const data = [];
    for (let i = 0; i < cryptos.data.length; i++) {
        const crypto = cryptos.data[i];
        if(crypto.id === 'bitcoin' || crypto.id === 'ethereum'){
            labels.push(crypto.id);
            data.push(crypto.priceUsd);
        }
    }
    console.log(labels);
    console.log(data);
    createChart(chart1, labels, data, 'Crypto', 'bar');

}
function createChart(canvas, labels, data, label, type){
    new Chart(canvas, {
        type: type,
        data: {
        //de labels komen op de x as
        labels: labels,
        datasets: [{
            label: label,
            // de data komt op de y as
            data: data,
            borderWidth: 1
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
}

/*function showData(jsonData){
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
}*/