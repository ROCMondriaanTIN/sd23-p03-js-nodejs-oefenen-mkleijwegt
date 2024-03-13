import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'node:fs';

const messageArray = [];

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/pokemon', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/poke.json', function(err, data){
        res.send(data);
    });
});

app.get('/messages', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    res.send(JSON.stringify(messageArray));
});


app.post('/sendMessage', (req, res) => {
    const message = req.body.message;
    const sender = req.body.sender;
    messageArray.push({
        sender: sender,
        message: message,
        date: new Date()
    });
    res.send({ success: true });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});