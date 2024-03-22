console.log('KFC loaded');

const cardContainer = document.querySelector('.card-container');

fetch('/kfc')
.then(jsonData => jsonData.json())
.then(jsonData => generateCards(jsonData));

function generateCards(chickenDishes){
    console.log(chickenDishes);

    let htmlCode = '';
    for (let i = 0; i < chickenDishes.length; i++) {
        const chickenDish = chickenDishes[i];
        htmlCode += generateCard(chickenDish);
    }
    cardContainer.innerHTML = htmlCode;
}

function generateCard(chickenDish){
    const card = `
        <div class="card">
            <h2>${chickenDish.name}</h2>
            <img src="${chickenDish.image}" />
            <p>€${chickenDish.price}</p>
        </div>
    `;

    return card;

}