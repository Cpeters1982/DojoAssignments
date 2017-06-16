
var app = require('./modules/app.js')

var setupNoteFactory = require('./factories/note.js')
setupNoteFactory(app)

var setupNotesController = require('./controllers/NotesController.js')
setupNotesController(app)
