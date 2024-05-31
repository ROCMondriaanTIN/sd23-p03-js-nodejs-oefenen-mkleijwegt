import express from 'express';
import {} from 'dotenv/config';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3000;

const databaseUrl = process.env.CONNECTION_URL;
const client = new MongoClient(databaseUrl);

app.use(express.static('public'));

app.get('/games', (req, res) => {
    fetchDocuments().then(documents => {
        //in de then() geven we de documenten terug naar de browser in de vorm van json
        res.json(documents);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
                
//Deze functie geeft alle documenten terug uit een collectie in MongoDB
async function fetchDocuments() {
    try {
        // we verbinden de client met de server
        await client.connect();
        //hier verbinden we met de database, je moet nog wel een naam invullen
        const database = client.db('game');
        //hier verbinden we met de collectie, je moet nog wel een naam invullen
        const collection = database.collection('game');
        //hier halen we de documenten uit de collectie in de vorm van een array
        const documents = await collection.find().toArray();
        //uiteindelijk geven we de documenten terug
        return documents;
    } finally {
        //we zorgen ervoor dat aan het einde de database verbinding weer wordt gesloten
        await client.close();
    }
}  