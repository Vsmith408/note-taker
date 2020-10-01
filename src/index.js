let express = require('express')
let path = require('path')
const controllers = require('./controllers')

let app = express()
let PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ==================================================
// API routes
app.get('/api/notes', controllers.getNotes)

app.post('/api/notes', controllers.createNote)

// : - named URL param
app.delete('/api/notes/:id', controllers.deleteNote)

// ==================================================
// Static routes
app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/notes.html'))
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// ==================================================
// Server listening
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})
