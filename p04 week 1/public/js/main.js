console.log('Cheese loaded');

//select container from html
const container = document.querySelector('.container');


//fetching cheeses from node js server
fetch('/cheeses')
    .then(myData => myData.json())
    .then(jsonData => showCards(jsonData));

//function that shows the cards on the html page
function showCards(cheeses) {
    console.log(cheeses);

    let htmlCode = '<div class="row">';
    //for loop that loops over the cheese array and generates a card for each cheese
    for (let i = 0; i < cheeses.length; i++) {
        const cheese = cheeses[i];
        //calling the create card function that returns the html for a card
        htmlCode += createCard(cheese);
    }
    htmlCode += '</div>';
    //adding the html to the webpage
    container.innerHTML = htmlCode;
}

//function that creates a single card in the form of html
function createCard(cheese) {
    //we use the back tick here to ease our minds adding in variables (no plusjes yay!)
    const card = `
        <div class="col-md-4 d-flex align-items-stretch">
            <div class="card bg-dark text-white">
                <h2>${cheese.name}</h2>
                <img class="card-img-top" src="${cheese.image}" />
                <p>${cheese.description}</p>
            </div>
        </div>
    `;
    return card;
}

