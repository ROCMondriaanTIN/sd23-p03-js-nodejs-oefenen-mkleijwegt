import  os  from 'node:os';

console.log(os.freemem());

console.log(os.totalmem());

const memoryInUse = os.totalmem() - os.freemem();

const memoryInUseGB = memoryInUse / 1000000000;

console.log('Memory in use is ' + memoryInUseGB.toFixed(2));

//console.log('Memory in use is ' + ((os.totalmem() - os.freemem()) / 1000000000).toFixed(2) + 'GB');