import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const userArray = [];

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    let htmlCode = '<ul>';
    for (let i = 0; i < userArray.length; i++) {
        const user = userArray[i];
        htmlCode += `<li>${user.username} - ${user.password} </li>`;
    }
    htmlCode += '<ul>';
    res.send(htmlCode);
});

app.post('/authenticate', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body.username);
    console.log(req.body.password);
    let loggedIn = false;
    for (let i = 0; i < userArray.length; i++) {
        const user = userArray[i];
        if(user.username === username && user.password === password){
            res.send(`Logged in with username: ${username} 
                <br/><a href="login.html">Back to login</a>
                <br/><a href="register.html">Back to register</a>
                <br/><a href="users">List users</a>`);
            loggedIn = true;
            break;
        }     
    }
    if(!loggedIn){
        res.send(`Failed to authenticate with username: ${username} 
            <br/><a href="login.html">Back to login</a>
            <br/><a href="register.html">Back to register</a>
            <br/><a href="users">List users</a>`);
    }
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body.username);
    console.log(req.body.password);
    userArray.push({
        username: username,
        password: password
    });
    //res.send(`Successfully registered user with username: ${username}`);
    res.redirect('login.html');
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});