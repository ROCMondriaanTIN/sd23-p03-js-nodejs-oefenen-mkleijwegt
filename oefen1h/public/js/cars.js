console.log('Cars loaded');

const container = document.querySelector('.container');

fetch('/cars')
.then(myData => myData.json())
.then(jsonData => showCards(jsonData));

function showCards(cars) {
    console.log(cars);

    let htmlCode = '';
    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];
        htmlCode += createCard(car);
    }
    container.innerHTML = htmlCode;
}

function createCard(car){
    const card = `
        <div class="card">
            <h2>${car.name}</h2>
            <img src="${car.image}" />
            <p>${car.manufacturYear}</p>
        </div>
    `;
    return card;
}