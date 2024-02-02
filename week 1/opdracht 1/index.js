import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('Wat is je naam? ');

console.log(`Welkom: ${answer}`);

rl.close();