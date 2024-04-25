console.log('main loaded');

const cardRow = document.querySelector('.card-row');

fetch('/cheese')
    .then(myData => myData.json())
    .then(jsonData => showCards(jsonData));

function showCards(cheeses) {
    console.log(cheeses);

    let htmlCode = '';
    for (let i = 0; i < cheeses.length; i++) {
        const cheese = cheeses[i];
        htmlCode += createCard(cheese);
    }
    cardRow.innerHTML = htmlCode;

}

function createCard(cheese){
    const card = `
    <div class="card">
        <img class="card-img-top" src="${cheese.image}" alt="Title" />
        <div class="card-body">
            <h4 class="card-title">${cheese.name}</h4>
            <p class="card-text">${cheese.description}</p>
        </div>
    </div>
    `;

    return card;
}
