// modules
const fs = require('fs')

// getting the notes
function getNotes() {}

// adding a note (title, body)
function addNote(title, body) {
    const notes = load();

    let duplicates = notes.filter(item => item.title === title)

    if (duplicates.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        save(notes)
        console.log("Note added")
    } else {
        console.log("Note title taken")
    }
}

// load the notes from db
function load() {
    try {
        let data = fs.readFileSync('notes.json')
        let dataJSON = data.toString()
        let notes = JSON.parse(dataJSON)
        return notes
    } catch (e) {
        return [];
    }
}

// save notes in db
function save(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

// exports
module.exports = {
    addNote: addNote,
    getNotes: getNotes
}