import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = 3000;

const databaseUrl = process.env.CONNECTION_URL;

const client = new MongoClient(databaseUrl);

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/cheeses', (req, res) => {
    fetchCheeses().then(cheeses => {
        res.json(cheeses);
    });
});

app.post('/add-cheese', (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const image = req.body.image;

    insertCheese(name, description, image).
        then(res.send({ cheeseAdded: true }));
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
        const collection = database.collection("cheese");
        //we fetch the cheeses from our database
        const cheeses = await collection.find().toArray();
        //finally we return the cheeses
        return cheeses;
    } finally {
        // ensures that the client will close when you finish/error
        await client.close();
    }
}

async function insertCheese(name, description, image) {
    try {
        // connect the client to the server 
        await client.connect();
        //we connection with the test database
        const database = client.db("test");
        //we connect with the cheese collection
        const collection = database.collection("cheese");
        //the cheese is inserted 
        await collection.insertOne({ name: name, description: description, image: image });
        console.log("succesfully inserted cheese");
    } finally {
        // ensures that the client will close when you finish/error
        await client.close();
    }
}