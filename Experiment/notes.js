console.log(`Starting the app`);

var  fs = require('fs');

var readNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    
    } catch (error) {
        return [];
    }
};

var writeNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote = (title,body) => {
    var  notes = readNotes();
    var note = {
        title,
        body
    };


    var duplicateString = notes.filter((note) => {
        return note.title ===  title;
    });
    
    if(duplicateString.length === 0) {
        notes.push(note);
        console.log(`Item added with Title : "${note.title}"`);
        writeNotes(notes);
    }
    else {
        console.log(`Duplicates are not allowed`);
    }
};

var removeNote = (title) => {
    //fetch notes
    var notes = readNotes();
    //filter the elements by removing the title argument 
    var filteredNotes = notes.filter((note)=>note.title !==title);
    //save the new notes to array
    writeNotes(filteredNotes);
    
    //checking whether the note is removed or not
    if(notes.length === filteredNotes.length) {
        console.log(`No note found to delete`);
    }
    else {
        console.log(`Note deleted successfully`);
    }
};

var getNote = (title) => {
    //fetch notes
    let notes = readNotes();
    //filter the notes by accessing the only note which user want
    let wishNote = notes.filter((note) => note.title===title);
    //display the note that you was checking
    if(wishNote.length!==0) {
        console.log(`Item present with the title : ${wishNote[0].title}`);
    }
    else {
        console.log(`No item present with the title : ${title}`);
    }
};

var getAll = () => {
    var allNotes = readNotes();
    console.log(`Printing the ${allNotes.length} to the console`);

    allNotes.forEach((note) => console.log(note));
};

module.exports = {
    addNote,
    removeNote,
    getNote,
    getAll
};