var mongoose = require('mongoose')
var Name = mongoose.model('Name')



exports.all = function(req, res){
  Name.find({}, function(errors, names){

    if(errors){
      console.log(errors)
      res.json({})
    } else {
      console.log(names)
      res.json(names)
    }

  })
}

exports.create = function(req, res){

  var newName = new Name({name:req.params.name})
  newName.save(function(err){
    if (err){
      console.log(err)
      res.json({result:"failure", errors:err})
    } else {
      console.log('new name successfully added')
      res.json({result:"success", message:"new name successfully added"})
    }
  })

}

exports.destroy = function(req, res){

  Name.remove({name:req.params.name}, function(err){
    if(err){
      console.log(err)
      res.json({result:"failure", errors:err})
    } else {
      console.log("successfully removed name")
      res.json({result:"success", message:"successfully removed name"})
    }

  })


}

exports.show = function(req, res){

  Name.findOne({name:req.params.name}, function(err, name){
    if(err){
      console.log(err);
      res.json({result:"failure", errors:err})
    } else {
      console.log(name)
      res.json(name)
    }
  })

}
