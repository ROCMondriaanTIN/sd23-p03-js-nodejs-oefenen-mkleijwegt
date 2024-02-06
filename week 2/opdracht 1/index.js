import  os  from 'node:os';

console.log(os.cpus());

for (let i = 0; i < os.cpus().length; i++) {
    const cpu = os.cpus()[i];
    console.log('Model is: ' + cpu.model + ' Speed is: ' + cpu.speed);
    
}