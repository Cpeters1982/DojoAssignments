var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/anonymous_notes_db');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  text:{type:String, required:true, minlength:3},
}, {timestamps:true});

mongoose.model('Note', NoteSchema);
