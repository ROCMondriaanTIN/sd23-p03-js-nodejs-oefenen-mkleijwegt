console.log('main loaded');

const cardRow = document.querySelector('.card-row');

fetch('/cheeses')
    .then(data => data.json())
    .then(jsonData => showCards(jsonData));

function showCards(cheeses){
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
        <div class="col-md-4 d-flex align-items-stretch">
            <div class="card">
                <img class="card-img-top" style="height: 300px; object-fit: cover;" src="${cheese.image}" alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">${cheese.name}</h4>
                    <p class="card-text">${cheese.description}</p>
                </div>
            </div>
        </div>
    `;
    return card;

}