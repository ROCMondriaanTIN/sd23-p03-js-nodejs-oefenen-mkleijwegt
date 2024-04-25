app.get('/episodes/:episodeName', (req, res) => {
    console.log(req.params.episodeName);
    fetchEpisodes(req.params.episodeName).then(episodes =>{
        res.send(episodes);
    });
    
});

app.get('/episodes', (req, res) => {
    fetchEpisodes().then(episodes =>{
        res.send(episodes);
    });
    
});

//this function returns all messages from the message collection in Mongodb
async function fetchEpisodes(name) {
    try {
        // connect the client to the server 
        await client.connect();
        //we connection with the dashboard database
        const database = client.db('dashboard');
        //we connect with the message collection
        const collection = database.collection('episode');
        //we fetch the messages from our database
        let episodes;
        if(name){
            episodes = await collection.find({name: name}).toArray();
        } else{
            episodes = await collection.find().toArray();
        }
        //finally we return the cheeses
        return episodes;
    } finally {
        // ensures that the client will close when you finish/error
        await client.close();
    }
}