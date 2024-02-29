import express from 'express';
import * as fs from 'node:fs';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

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

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/example', (req, res) => {
  res.send('Hello Example!');
});

app.get('/html-example', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.send('<h1>Hello HTML example!</h1>');
});

app.get('/json-example', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  res.send(JSON.stringify(songArray));
});

app.get('/json-example2', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  res.send(songArray);
});

app.get('/pokemon', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/poke.json', function(err, data) {
    res.send(data);
  });
});

app.get('/mikehtml', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  fs.readFile('html/index.html', function(err, data){
      res.send(data);
  });
});

app.get('/mikecss', (req, res) => {
  res.setHeader('Content-type', 'text/css');
  fs.readFile('css/style.css', function(err, data){
      res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});