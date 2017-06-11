var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quoting_dojo')
mongoose.Promise = global.Promise

var QuoteSchema = new mongoose.Schema({
  name:{type:String},
  quote:{type:String}
}, {timestamps:true})

mongoose.model('Quote', QuoteSchema);
