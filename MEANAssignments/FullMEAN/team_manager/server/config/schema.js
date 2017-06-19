var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/team_manager_db');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name:{type:String, required:true, unique:true, dropDups:true},
  position:{type:String, required:true},
  game_1_pos:{type:Number, required:true, min:0, max:2, default:2},
  game_2_pos:{type:Number, required:true, min:0, max:2, default:2},
  game_3_pos:{type:Number, required:true, min:0, max:2, default:2}

}, {timestamps:true});

mongoose.model('Player', PlayerSchema);
