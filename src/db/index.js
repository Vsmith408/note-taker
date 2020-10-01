const fs = require('fs')
const { get } = require('http')
const { uuid } = require('uuidv4')

const getNotes = () => {
  let data = fs.readFileSync(__dirname + '/db.json')
  return JSON.parse(data)
}

/**
 * save note to DB
 * @param {string} title
 * @param {string} text
 */
const createNote = (title, text) => {
  let note = {
    title: title,
    text: text,
    id: uuid(),
  }

  let notes = getNotes()
  notes.push(note)

  fs.writeFileSync(__dirname + '/db.json', JSON.stringify(notes))
  return note
}

const deleteNote = (id) => {
  let notes = getNotes()
  let newNotes = notes.filter((note) => {
    return note.id !== id
  })
  fs.writeFileSync(__dirname + '/db.json', JSON.stringify(newNotes))
  return id
}

module.exports = { getNotes, createNote, deleteNote }
