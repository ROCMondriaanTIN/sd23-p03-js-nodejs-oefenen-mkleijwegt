console.log('episode loaded');

const episodeRow = document.querySelector('.episode-row');
const episodeInfo = document.querySelector('.episode-info');

fetch('/episodes')
    .then(data => data.json())
    .then(jsonData => showEpisodes(jsonData));


function showEpisodes(episodes) {
    console.log(episodes);

    for (let i = 0; i < episodes.length; i++) {
        const episode = episodes[i];
        episodeRow.appendChild(createCard(episode));
    }
}

function createCard(episode){
    const col = document.createElement('div');
    col.classList.add('col-md-4');
    const card = document.createElement('div');
    card.classList.add('card');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = episode.name;

    button.addEventListener('click', function(){
        fillEpisodeInfoCard(episode);
    });

    col.appendChild(card);
    card.appendChild(button);

    return col;
}

function fillEpisodeInfoCard(episode){

    const card = `
        <div class="card">
            <img class="card-img-top" src="${episode.image}" alt="Title" />
            <div class="card-body">
                <h4 class="card-title">${episode.name}</h4>
                <p class="card-text">Text</p>
            </div>
        </div>`;

    episodeInfo.innerHTML = card;

}