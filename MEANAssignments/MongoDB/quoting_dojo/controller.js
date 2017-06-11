// var models = require('./models')
var mongoose = require('mongoose');
var Quote = mongoose.model('Quote')

exports.index = function(req, res){
  res.render('index')
}


exports.newQuote = function(req, res){

  // console.log("Post data: ", req.body)
  var quote = new Quote({name:req.body.name, quote:req.body.quote});
  // console.log(quote)
  quote.save(function(error){
    if (error){
      console.log("Unable to save quote")
    } else {
      console.log("Quote saved successfully")
    }
    res.redirect('/quotes')
  })

}


exports.quotes = function(req, res){

  Quote.find({}, function(errors, quotes){
    if (errors){
      console.log(errors);
      res.render('quotes', {quotes:[]})
    } else {
      console.log(quotes)
      res.render('quotes', {quotes: quotes})
    }
  })

}
