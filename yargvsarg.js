const _ = require('lodash');
const yargv = require('yargs');

console.log(`Difference between yargs and args`);

console.log(`This is node args`);

console.log(process.argv[2]);

console.log(`This is yargs args`);
console.log(yargv.argv);


console.log(`This is node args in detail`);
console.log(process.argv);

console.log("Pavan");
