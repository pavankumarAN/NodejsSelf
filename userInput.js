console.log('Starting App');

const fs = require('fs');

var command = process.argv[2];

console.log(`command : ${command}`);

if(command.toLowerCase() === 'Pavan'.toLowerCase()) {
    console.log(`Welcome owner of the laptop`);
}
else if(command.toLowerCase()!=='Pavan'.toLowerCase() && command!==undefined) {
    console.log(`Welcome gest user`);
}
else {
    console.log(`You didn't entered any command`);
}