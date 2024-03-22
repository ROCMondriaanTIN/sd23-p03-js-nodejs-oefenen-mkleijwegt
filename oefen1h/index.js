import express from 'express';

const app = express();
const port = 3000;

const cars = [
    {
        name: 'Mercedes',
        manufacturYear: '2004',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg/1920px-2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg'
    },
    {
        name: 'BMW',
        manufacturYear: '2018',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg/1920px-2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg'
    },
    {
        name: 'Toyota',
        manufacturYear: '1999',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg/1920px-2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg'
    }
]

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/cars', (req, res) => {
    res.json(cars);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});