const db = require('../db')

const getNotes = (_req, res) => {
  const data = db.getNotes()
  res.json(data)
}

const createNote = (req, res) => {
  const { title, text } = req.body
  const newNote = db.createNote(title, text)
  res.json(newNote)
}

const deleteNote = (req, res) => {
  let { id } = req.params
  db.deleteNote(id)

  res.json({
    success: true,
  })
}

module.exports = { getNotes, createNote, deleteNote }
