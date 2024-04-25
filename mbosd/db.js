import { MongoClient } from "mongodb";
//lees de connection string uit de environment file
const connectionString = process.env.CONNECTION_URL;
//maak een nieuwe MongoClient aan met de connection string
const client = new MongoClient(connectionString);
let connection;
try {
    //zet de verbinding op
    connection = await client.connect();
} catch (e) {
    //gaat het mis toon de error op het console
    console.error(e);
}
//zet de verbinding op met de database (vul nog wel even je database naam in)
let db = connection.db('test');
//exporteer het variabele db voor verder gebruik
export default db;