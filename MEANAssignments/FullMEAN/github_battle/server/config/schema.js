var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/github_battle_db2');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var RankingSchema = new Schema({
  name:{type:String, required:true, unique:true, dropDups:true},
  score:{type:Number, required:true},
  img_path:{type:String, required:true}

}, {timestamps:true});

mongoose.model('Ranking', RankingSchema);
