var mongoose = require('mongoose')
var Message = mongoose.model('Message')

exports.index = function(req, res){
  Message.find({}, function(errors, messages){

    if(errors){
      console.log(errors)
      res.json(errors)
    } else {
      // console.log(messages)
      res.json(messages)
    }

  }).sort({createdAt:-1})
}

exports.create = function(req, res){

  console.log("BODY OF REQUEST: ", req.body)

  var newMessage = new Message({name:req.body.name, text:req.body.text})
  newMessage.save(function(err){
    if (err){
      console.log(err)
      res.json({result:"failure", message:"Error during message creation", errors:err})
    } else {
      console.log('new message successfully created')
      res.json({result:"success", message:"Successfully created new message"})
    }
  })

}

exports.comment = function(req, res){
  console.log("attempting to add comment to message with ID...")
  console.log(req.params.message_id)

  Message.findOne({_id:req.params.message_id}, function(err, message){

    if (err){
      console.log(err);
      console.log("Unable to find message with id: ", req.params.message_id)
      res.json({result:"failure", message:"Unable to find message with requested ID, comment creation failed", errors:err})
    } else {
      var comment = {name:req.body.name, text:req.body.text}
      message.comments.push(comment);
      message.save(function(message_error){
        if (message_error){
          console.log(message_error);
          res.json({result:"failure", message:"Error during comment creation", errors:message_error})
        } else {
          console.log("comment saved to message successfully")
          res.json({result:"success", message:"Successfully created comment on message"})
        }

      })
    }

  })

}

exports.deleteMessage = function(req, res){
  console.log("attempting to delete message with ID...")
  console.log(req.params.message_id)

  Message.remove({_id:req.params.message_id}, function(err){
    if (err){
      console.log(err)
      res.json({result:"failure", message:"Error during message deletion", errors:err})
    } else {
      console.log('Message successfully deleted')
      res.json({result:"success", message:"Successfully deleted message"})
    }
  })
}

exports.deleteComment = function(req, res){
  console.log("attempting to delete comment with ID...")
  console.log(req.params.comment_id)
  console.log("...within message with ID...")
  console.log(req.params.message_id)

  Message.findOne({_id:req.params.message_id}, function(err, message){

    if (err){
      console.log(err);
      console.log("Unable to find message with id: ", req.params.message_id)
      res.json({result:"failure", message:"Unable to find message with requested ID, comment deletion failed", errors:err})
    } else {

      for (var i = 0; i < message.comments.length; i++){
        if (message.comments[i]._id == req.params.comment_id){
          message.comments.splice(i,1);
          break;
        }
      }
      message.save(function(message_error){
        if (message_error){
          console.log(message_error);
          res.json({result:"failure", message:"Error during comment deletion", errors:message_error})
        } else {
          console.log("comment deleted successfully")
          res.json({result:"success", message:"Successfully deleted comment from message"})
        }

      })
    }

  })
}
