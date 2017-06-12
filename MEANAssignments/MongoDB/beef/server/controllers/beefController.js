var mongoose = require('mongoose')
var Cow = mongoose.model('Cow')


exports.index = function(req, res){
  Cow.find({}, function(errors, cows){

    if(errors){
      console.log(errors)
      res.render('index', {cows:[]})
    } else {
      console.log(cows)
      res.render('index', {cows: cows})
    }

  })
  // res.render('index')
}

exports.new = function(req, res){
  res.render('new')
}

exports.create = function(req, res){

  var newCow = new Cow({name:req.body.name, age:req.body.age, weight:req.body.weight})
  newCow.save(function(err){
    if (err){
      console.log(err)
      res.redirect('/')
    } else {
      console.log('success')
      res.redirect('/')
    }
  })

}

exports.show = function(req, res){

  Cow.findOne({_id:req.params.id}, function(err, cow){
    if (err){
      console.log(err)
      res.render('show', {cow:false})
    } else {
      console.log("Found cow!")
      console.log(cow)
      res.render('show', {cow: cow})
    }
  })
}

exports.edit = function(req, res){
  Cow.findOne({_id:req.params.id}, function(err, cow){
    if (err){
      console.log(err)
      res.render('edit', {cow:false})
    } else {
      console.log("Found cow!")
      console.log(cow)
      res.render('edit', {cow: cow})
    }
  })

}

exports.update = function(req, res){
  var updated = req.body
  Cow.update({_id:req.params.id}, updated, function(err, cow){
    if (err){
      console.log(err)
    } else {
      console.log("Successfully updated")
      console.log(cow)
    }
    res.redirect('/beef/' + String(req.params.id))
  })
}

exports.destroy = function(req, res){
  Cow.remove({_id:req.params.id}, function(err){
    if(err){
      console.log(err)
    } else {
      console.log("Successfully deleted")
    }
    res.redirect('/')
  })
}
