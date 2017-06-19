var mongoose = require('mongoose')
var Ranking = mongoose.model('Ranking')

exports.all = function(req, res){
  Ranking.find({}, function(errors, rankings){

    if(errors){
      console.log(errors)
      res.json(errors)
    } else {
      // console.log(rankings)
      res.json(rankings)
    }

  }).sort({score:-1})
}

exports.create = function(req, res){

  console.log("BODY OF REQUEST: ", req.body)
  // Ranking.findOne({name:req.body.name}, function)

  var newRanking = new Ranking({name:req.body.name, score:req.body.score, img_path:req.body.img_path})
  newRanking.save(function(err){
    if (err){
      console.log(err)
      res.json({result:"failure", message:"Error during ranking creation", errors:err})
    } else {
      console.log('new ranking successfully created')
      res.json({result:"success", message:"Successfully created new ranking"})
    }
  })

}
