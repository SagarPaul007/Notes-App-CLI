// modules
const fs = require('fs')
const chalk = require('chalk')

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
        console.log(chalk.green.inverse("Note added"))
    } else {
        console.log(chalk.red("Note title taken"))
    }
}

// removing a note 

function removeNote(title) {
    let notes = load()
    const newNotes = notes.filter(item => item.title !== title)
    if (newNotes.length === notes.length) {
        console.log(chalk.red("No note found with this title"))
    } else {
        save(newNotes)
        console.log(chalk.green("removed"))
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
    getNotes: getNotes,
    removeNote: removeNote
}