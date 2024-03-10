console.log('main loaded');

const registerButton = document.querySelector('.register');
const emailField = document.querySelector('.email');
const passwordField = document.querySelector('.password');

registerButton.addEventListener('click', function () {
    emailField.classList.remove('red');
    passwordField.classList.remove('red');
    //post fetch to webservice 
    (async () => {
        const rawResponse = await fetch('/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: emailField.value, password: passwordField.value })
        });
        const content = await rawResponse.json();
        console.log(content);
        if (content.success) {
            window.location.href = 'login.html';
        } else {
            for (let i = 0; i < content.details.body.length; i++) {
                
                if (content.details.body[i].context.label == 'email') {
                    emailField.classList.add('red');
                }
                if (content.details.body[i].context.label == 'password') {
                    passwordField.classList.add('red');
                }
            }
        }
    })();
});