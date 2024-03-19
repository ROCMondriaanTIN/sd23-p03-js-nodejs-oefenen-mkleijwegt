console.log('main loaded');

const messageInput = document.querySelector('.message-input');
const messageButton = document.querySelector('.message-button');
const messageContainer = document.querySelector('.message-container');

let messageArray = [];

fetchMessages();

messageInput.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        postMessage();
    }
});

messageButton.addEventListener('click', function () {
    postMessage();
});

function postMessage() {
    //post fetch to webservice 
    (async () => {
        const rawResponse = await fetch('/sendMessage', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sender: 'Mr. Kleijwegt', message: messageInput.value })
        });
        const content = await rawResponse.json();

        console.log(content.success);
        if (content.success) {
            messageInput.value = '';
        } else {
            alert('Het ging niet goed, probeer het later nog eens.');
        }
    })();
}

function fetchMessages() {
    fetch('/messages')
        .then(data => data.json())
        .then(myJsonData => showMessages(myJsonData));
}

function showMessages(messages) {
    //in case the messageArray is the same length as the incoming messages array there are no new messages 
    if (messageArray.length === messages.length) {
        setTimeout(fetchMessages, 1000);
    } else {
        messageArray = messages;
        let htmlCode = '';
        for (let i = 0; i < messageArray.length; i++) {
            const message = messageArray[i];
            htmlCode += createMessageCard(message);
        }
        messageContainer.innerHTML = htmlCode;
        messageContainer.scrollTop = messageContainer.scrollHeight;

        setTimeout(fetchMessages, 1000);
    }
}

function createMessageCard(message) {
    const card = `
        <div class="card">
            <div class="message">
                Message: ${message.message}
            </div>
            <div class="sender">
                Sender: ${message.sender}
            </div>
            <div class="date">
                Date/time: ${message.date}
            </div>
        </div>
    `;
    return card;
}