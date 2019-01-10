const fs = require('fs');

//one 
fs.appendFile('message1.txt','Type1 of creating and writing to the file');

//two
fs.appendFile('message2.txt','Type2 of creating and writing to the file', (err) => {
    if(err) {
        console.log('Error while writing to the file');
    }
});

//three
fs.appendFileSync('message3.txt', 'Type3 of creating and writing to the file');