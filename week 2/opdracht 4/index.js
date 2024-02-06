import http  from 'node:http';

const songArray = [
    {
        title: 'The Great Nothing',
        artist: 'Spock\'s Beard'
    },

    {
        title: 'All of the Above',
        artist: 'Transatlantic'
    },

    {
        title: 'Magnetism',
        artist: 'Ayreon'
    }
];

http.createServer(function (req, res) {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    res.write(JSON.stringify(songArray)); 
    res.end(); 
  }).listen(8080);