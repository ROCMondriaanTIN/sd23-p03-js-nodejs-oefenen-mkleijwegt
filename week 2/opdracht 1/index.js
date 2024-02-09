import  os  from 'node:os';

console.log(os.cpus());

const cpuArray = os.cpus();

for (let i = 0; i < cpuArray.length; i++) {
    const cpu = cpuArray[i];
    console.log('Model is: ' + cpu.model + ' Speed is: ' + cpu.speed);
    
}