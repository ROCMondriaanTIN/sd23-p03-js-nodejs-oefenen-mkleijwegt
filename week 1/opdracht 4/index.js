import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const randomNumber = getRandomInt(10);
console.log(randomNumber);

//let guessedNumber = parseInt(await rl.question('Raad het getal tussen de 1 en 10? '));
let guessedNumber = await rl.question('Raad het getal tussen de 1 en 10? ');

while(guessedNumber != randomNumber){
    //guessedNumber = parseInt(await rl.question('Raad het getal tussen de 1 en 10? '));
    guessedNumber = await rl.question('Raad het getal tussen de 1 en 10? ');
}
console.log('Gefeliciteerd je hebt het getal geraden');

rl.close();

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}