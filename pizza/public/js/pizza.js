console.log('pizza baked');

const pizzaRow = document.querySelector('.pizza-row');
const nameInput = document.querySelector('.name-input');
const descriptionInput = document.querySelector('.description-input');
const priceInput = document.querySelector('.price-input');
const submitButton = document.querySelector('.submit-pizza');

fetchPizzas();

function fetchPizzas(){
    fetch('/pizzas')
        .then(data => data.json())
        .then(jsonData => showPizzas(jsonData));
}

function showPizzas(pizzas){
    console.log(pizzas);

    let htmlCode = '';
    for (let i = 0; i < pizzas.length; i++) {
        const pizza = pizzas[i];
        htmlCode += createCard(pizza);
    }
    pizzaRow.innerHTML = htmlCode;
}

function createCard(pizza){
    const card = `
        <div class="col-md-4 d-flex align-items-stretch">
            <div class="card">
                <img class="card-img-top" src="https://cdn.drawception.com/images/panels/2016/2-2/dZH37q41YT-4.png" alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">${pizza.name}</h4>
                    <p class="card-text">${pizza.description}</p>
                    <p class="card-text">${pizza.price}</p>
                </div>
            </div>
        </div>
    `;
    return card;
}

submitButton.addEventListener('click', function(e){
    e.preventDefault();

    (async () => {
        const rawResponse = await fetch('add-pizza', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: nameInput.value, description: descriptionInput.value, price: priceInput.value})
        });
        const content = await rawResponse.json();
      
        console.log(content);
        if(content.pizzaAdded){
            nameInput.value = '';
            descriptionInput.value = '';
            priceInput.value = '';
            fetchPizzas();
        }

      })();
});
