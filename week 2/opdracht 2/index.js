import  os  from 'node:os';

console.log(os.freemem());

console.log(os.totalmem());

console.log('Memory in use is ' + ((os.totalmem() - os.freemem()) / 1000000000).toFixed(2) + 'GB');