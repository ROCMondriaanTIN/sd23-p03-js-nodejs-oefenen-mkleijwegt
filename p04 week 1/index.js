import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();

const app = express();
const port = 3000;

const databaseUrl = process.env.CONNECTION_URL;

const client = new MongoClient(databaseUrl, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/cheeses', (req, res) => {
    fetchCheeses().then(cheeses => {
        res.json(cheeses);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

//this function returns all cheeses from the cheese collection in Mongodb
async function fetchCheeses() {
    try {
        // connect the client to the server 
        await client.connect();
        //we connection with the test database
        const database = client.db("test");
        //we connect with the cheese collection
        const collection = database.collection('cheese');
        //we fetch the cheeses from our database
        const cheeses = await collection.find().toArray();
        //finally we return the cheeses
        return cheeses;
    } finally {
        // ensures that the client will close when you finish/error
        await client.close();
    }
}