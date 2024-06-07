console.log('episode loaded');

const dataRow = document.querySelector('.data-row');
const main = document.querySelector('main');

fetchEpisodes();

function fetchEpisodes() {
    fetch('/episodes')
        .then(data => data.json())
        .then(jsonData => showEpisodes(jsonData));
}


function showEpisodes(episodes) {
    console.log(episodes);
    dataRow.innerHTML = '';
    const col = document.createElement('div');
    col.classList.add('col-md-1');
    dataRow.appendChild(col);
    for (let i = 0; i < episodes.length; i++) {
        const episode = episodes[i];
        col.appendChild(createCard(episode));
    }
}

function createCard(episode) {
    const col = document.createElement('div');
    col.classList.add('col-md-12');
    const card = document.createElement('div');
    card.classList.add('card');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = episode.name;

    button.addEventListener('click', function () {
        fillEpisodeInfoCard(episode);
    });

    col.appendChild(card);
    card.appendChild(button);

    return col;
}

function fillEpisodeInfoCard(episode) {


    const card = document.createElement('div');
    card.classList.add('card');
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.src = episode.image;
    image.alt = episode.name;
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = episode.name;
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    const backButton = document.createElement('button');
    backButton.classList.add('btn', 'btn-primary');
    backButton.textContent = 'Back to episodes';

    card.appendChild(image);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(backButton);

    backButton.addEventListener('click', function(){
        fetchEpisodes();
    });

    /*const card = `
        <div class="card">
            <img class="card-img-top" src="${episode.image}" alt="Title" />
            <div class="card-body">
                <h4 class="card-title">${episode.name}</h4>
                <p class="card-text">Text</p>
            </div>
        </div>`;*/
    dataRow.innerHTML = '';
    dataRow.appendChild(card);

}