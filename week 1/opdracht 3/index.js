import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const length = await rl.question('Vul de lengte in van de rechthoek? ');
const width = await rl.question('Vul de breedte in van de rechthoek? ');

console.log(`De oppervlakte van de rechthoek is: ${length * width}`);

rl.close();