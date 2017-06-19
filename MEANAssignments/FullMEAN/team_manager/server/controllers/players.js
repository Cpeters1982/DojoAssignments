var mongoose = require('mongoose')
var Player = mongoose.model('Player')

exports.all = function(req, res){
  Player.find({}, function(errors, players){

    if(errors){
      console.log(errors)
      res.json(errors)
    } else {
      // console.log(players)
      res.json(players)
    }

  })
}

exports.create = function(req, res){

  console.log("BODY OF REQUEST: ", req.body)
  // Player.findOne({name:req.body.name}, function(err){})

  var newPlayer = new Player({name:req.body.name, position:req.body.position})
  newPlayer.save(function(err){
    if (err){
      console.log(err)
      res.json({result:"failure", message:"Error during player creation", errors:err})
    } else {
      console.log('new player successfully created')
      res.json({result:"success", message:"Successfully created new player", player:newPlayer})
    }
  })

}

exports.update = function(req, res){
  var id = req.params.player_id;

  console.log("REQUEST BODY:", req.body)

  Player.findOneAndUpdate({_id:id}, {$set:req.body}, {new:true}, function(err, player){
    if (err){
      console.log(err)
      res.json({result:'failure', message:"Unable to find player with ID: " + id, errors:err})
    } else {
      console.log("Updated player", player)
      res.json({result:'success', message:"Successfully updated player", player:player})
    }
  })

}

exports.delete = function(req, res){
  Player.deleteOne({_id:req.params.player_id}, function(err){
    if(err){
      console.log(err);
      res.json({result:"failure", message:"Error during player deletion"})
    } else {
      console.log("Successfully deleted player")
      res.json({result:"success", message:"Successfully deleted player"})
    }
  })
}
