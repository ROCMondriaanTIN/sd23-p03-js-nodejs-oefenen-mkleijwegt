import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

const players = [
    {
        name: 'Cristiano Ronaldo',
        age: 39,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg'
    },
    {
        name: 'Lionel Messi',
        age: 36,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg'
    },
    {
        name: 'Neymar Jr',
        age: 33,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg'
    }
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/players', (req, res) => {
    res.json(players);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});