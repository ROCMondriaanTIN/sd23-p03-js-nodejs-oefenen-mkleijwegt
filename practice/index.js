import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

const cheeses = [
    {
        name: 'Edammer',
        description: 'Kaas uit Edam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/SmallEdamCheese.jpg/1280px-SmallEdamCheese.jpg'
    },
    {
        name: 'Gouda',
        description: 'Kaas uit Gouda',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Gouda.jpg'
    },
    {
        name: 'Port Salut',
        description: 'Kaas uit Port du Salut',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Port_Salut_cheese.jpg'
    }
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/cheeses', (req, res) => {
    res.json(cheeses);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});