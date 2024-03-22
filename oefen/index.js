import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

const chickenDishes = [
    {
        name: 'Chickenwrap',
        price: 24.00,
        image: 'https://s3-eu-central-1.amazonaws.com/www.kfc.nl/wp-media-folder-kfc-netherlands/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/76/6be50da5f0daa18ff0340d86aa2a88d6.jpg'
    },
    {
        name: 'Snackbox',
        price: 9.95,
        image: 'https://s3-eu-central-1.amazonaws.com/www.kfc.nl/wp-media-folder-kfc-netherlands/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/76/6be50da5f0daa18ff0340d86aa2a88d6.jpg'
    },
    {
        name: 'Zingerburger',
        price: 5.99,
        image: 'https://s3-eu-central-1.amazonaws.com/www.kfc.nl/wp-media-folder-kfc-netherlands/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/76/6be50da5f0daa18ff0340d86aa2a88d6.jpg'
    }
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/kfc', (req, res) => {
    res.json(chickenDishes);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});