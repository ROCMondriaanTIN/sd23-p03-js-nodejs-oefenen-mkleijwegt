//config wordt direct aangeroepen op de dotenv import
import {} from 'dotenv/config';
import express from 'express';
//db.js wordt geimporteerd zodat we direct gebruik kunnen maken van de verbinding met de database
import db from './db.js';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    //we halen de collection op
    const collection = await db.collection('test');
    //we halen alle documenten uit de collection op
    const results = await collection.find({})
        .toArray();
    //we geven de documenten terug uit de route
    res.send(results).status(200);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});