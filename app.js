const fs = require('fs');
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./note.js');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
        console.log(chalk.yellow('Note Title: ' + argv.title))
        console.log(chalk.bold.yellow('Note Body: ' + argv.body))
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('removing note with title: ' + argv.title)
        notes.removeNote(argv.title);
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('reading note')
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function () {
        console.log('listing notes')
        notes.getNotes()
    }
})

console.log(yargs.argv)