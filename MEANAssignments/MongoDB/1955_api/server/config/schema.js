var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/1955_api_db');
mongoose.Promise = global.Promise;

var NameSchema = new mongoose.Schema({
  name:{type:String, required:true, minlength:4},
}, {timestamps:true});


mongoose.model('Name', NameSchema);
