import express from 'express';
import { } from 'dotenv/config';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

const url = process.env.CONNECTION_URL;
console.log(url);

const client = new MongoClient(url);

app.get('/pizzas', (req, res) => {
    fetchPizza().then(pizzas => {
        res.json(pizzas);
    });
});

app.post('/add-pizza', (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;

    insertPizza(name, description, price).then(
        res.json({pizzaAdded: true})
    )

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

async function fetchPizza() {
    try {
        await client.connect();

        // Get the database and collection on which to run the operation
        const db = client.db('test');
        const col = db.collection('pizza');

        // Find the document
        const documents = await col.find().toArray();

        return documents;
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

async function insertPizza(name, description, price) {

    try {
        // Connect to the Atlas cluster
        await client.connect();

        // Get the database and collection on which to run the operation
        const db = client.db("test");
        const col = db.collection("pizza");

        // Insert the documents into the specified collection        
        const p = await col.insertOne({ name: name, description: description, price: price });
        // Print results

        console.log('Pizza toegevoegd');

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}