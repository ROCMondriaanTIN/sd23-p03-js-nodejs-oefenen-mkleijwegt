import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('Vul een bedrag in euro\'s in? ');

console.log(`Het bedrag in dollars is: ${answer * 1.09}`);

rl.close();