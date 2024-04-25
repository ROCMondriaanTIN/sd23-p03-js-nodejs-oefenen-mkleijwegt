console.log('add loaded');

const nameInput = document.querySelector('.name-input');
const descriptionInput = document.querySelector('.description-input');
const imageInput = document.querySelector('.image-input');
const addButton = document.querySelector('.add-button');

addButton.addEventListener('click', function (e) {
    //we stop the form from being submitted cause we have our own submit fetch logic
    e.preventDefault();
    e.stopPropagation();

    const name = nameInput.value;
    const description = descriptionInput.value;
    const image = imageInput.value;

    (async () => {
        const rawResponse = await fetch('/add-cheese', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, description: description, image: image })
        });
        const content = await rawResponse.json();

        console.log(content);

        if(content.cheeseAdded){
            alert('Kaas is toegevoegd');
        } else{
            alert('Er ging iets mis bij het toevoegen van de kaas');
        }

    })();
    
});