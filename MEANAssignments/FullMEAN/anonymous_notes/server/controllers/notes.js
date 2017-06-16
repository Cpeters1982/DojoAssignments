var mongoose = require('mongoose')
var Note = mongoose.model('Note')

exports.index = function(req, res){
  Note.find({}, function(errors, notes){

    if(errors){
      console.log(errors)
      res.json(errors)
    } else {
      // console.log(notes)
      res.json(notes)
    }

  }).sort({createdAt:-1})
}

exports.create = function(req, res){

  console.log("BODY OF REQUEST: ", req.body)

  var newNote = new Note({text:req.body.text})
  newNote.save(function(err){
    if (err){
      console.log(err)
      res.json({result:"failure", message:"Error during note creation", errors:err})
    } else {
      console.log('new note successfully created')
      res.json({result:"success", message:"Successfully created new note"})
    }
  })

}
