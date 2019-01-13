console.log(`Starting the app`);

var  fs = require('fs');

var addNote = (title,body) => {
    var  notes = [];
    var note = {
        title,
        body
    };

    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

module.exports = {
    addNote
};