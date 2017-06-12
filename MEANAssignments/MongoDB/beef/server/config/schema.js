var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/beef')
mongoose.Promise = global.Promise

var CowSchema = new mongoose.Schema({
  name:{type:String},
  age:{type:Number},
  weight:{type:Number}
}, {timestamps:true})

mongoose.model('Cow', CowSchema);
