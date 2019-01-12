//Conversion of normal object to the JSON object and parsing the JSON after retrieving
/* var person = {
    name : "Pavan",
    age : 25
};
console.log(`${person} and its type is ${typeof person}`);

let personToJSON =  JSON.stringify(person);

console.log(personToJSON + " and its type is " + typeof personToJSON);

let personToString = JSON.parse(personToJSON);

console.log(personToString + " and its type is " + typeof personToString);
 */

//This is writing JSON to the new note.json 
//And retrieving the same content back as we passed

var fs = require('fs');

var personObj = {
    name : 'Pavan',
    address : 'Chitradurga'
};

var personString = JSON.stringify(personObj);
fs.writeFileSync('notes.json',personString);

var personFromString = fs.readFileSync('notes.json');
var originalString = JSON.parse(personFromString);

console.log(typeof originalString);
console.log(typeof originalString.name);