var mongoose = require('mongoose')
var Message = mongoose.model('Message')
var User = mongoose.model('User')
var Comment = mongoose.model('Comment')

exports.index = function(req, res){
  Message.find({}).sort({createdAt:-1}).populate('comments').populate('_user').exec(function(errors, messages){

    if(errors){
      console.log(errors)
      res.json({result:"failure", message:"Failed to retrieve messages", errors:errors})
    } else {
      // console.log(messages)
      Message.populate(messages, {path:'comments._user', model:"User"}, function(secondErrors, populated){
        if(secondErrors){
          console.log("Error during second round of population")
          console.log(secondErrors)
          res.json({result:"failure", message:"Failed to populate users of comments", errors:secondErrors})
        } else {
          res.json({result:"success", messages:populated})
        }
      })

    }

  })
}

exports.create = function(req, res){

  console.log("BODY OF REQUEST: ", req.body)
  console.log(req.params)

  User.findOne({_id:req.body.user_id}, function(err1, user){

    if (err1){
      console.log(err1)
      res.json({result:"failure", message:"Error during message creation", errors:err1})
    } else if(!user){
      //no error, but user was not found...
      res.json({result:"failure", message:"Error during message creation", errors:{errors:{message:"Something went wrong"}}})
    } else {

      var newMessage = new Message({text:req.body.text})
      newMessage._user = user.id
      newMessage.save(function(err2){
        if (err2){
          console.log(err2)
          res.json({result:"failure", message:"Error during message creation/saving new message", errors:err2})
        } else {
          user.messages.push(newMessage);
          user.save(function(err3){
            if (err3){
              console.log(err3);
              res.json({result:"failure", message:"Error during message creation/saving to user", errors:err3})
            } else {
              console.log('new message successfully created')
              res.json({result:"success", message:"Successfully created new message and saved to user"})
            }
          })
        }
      })
    }
  })
}

exports.comment = function(req, res){
  // console.log("attempting to add comment to message with ID...")
  // console.log(req.params.message_id)
  Message.findOne({_id:req.params.message_id}, function(err1, message){
    if (err1){
      console.log(err1);
      console.log("Unable to find message with id: ", req.params.message_id)
      res.json({result:"failure", message:"Unable to find message with requested ID, comment creation failed", errors:err1})
    } else {
      console.log("Got message, finding user now...")
      User.findOne({_id:req.body.user_id}, function(err2, user){
        if(err2){
          console.log(err2);
          console.log("Unable to find user with id: ", req.body.user_id)
          res.json({result:"failure", message:"Unable to find user with requested ID, comment creation failed", errors:err2})
        } else {
          console.log("Got user, creating new comment now...")
          var comment = new Comment({text:req.body.text})
          comment._user = user.id
          comment.save(function(err3){
            if(err3){
              console.log(err3);
              res.json({result:"failure", message:"Error during comment creation/saving comment", errors:err3})
            } else {
              console.log("Attempting to save comment to message")
              message.comments.push(comment);
              message.save(function(err4){
                if (err4){
                  console.log(err4);
                  res.json({result:"failure", message:"Error during comment creation/saving to message", errors:err4})
                } else {
                  console.log("Attempting to save comment to user")
                  user.comments.push(comment);
                  user.save(function(err5){
                    if (err5){
                      console.log(err5);
                      res.json({result:"failure", message:"Error during comment creation/saving to user", errors:err5})
                    } else {
                      console.log("comment saved to message and user successfully")
                      res.json({result:"success", message:"Successfully created comment on message"})
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
}

// exports.deleteMessage = function(req, res){
//   console.log("attempting to delete message with ID...")
//   console.log(req.params.message_id)
//
//   Message.remove({_id:req.params.message_id}, function(err){
//     if (err){
//       console.log(err)
//       res.json({result:"failure", message:"Error during message deletion", errors:err})
//     } else {
//       console.log('Message successfully deleted')
//       res.json({result:"success", message:"Successfully deleted message"})
//     }
//   })
// }

// exports.deleteComment = function(req, res){
//   console.log("attempting to delete comment with ID...")
//   console.log(req.params.comment_id)
//   console.log("...within message with ID...")
//   console.log(req.params.message_id)
//
//   Message.findOne({_id:req.params.message_id}, function(err, message){
//
//     if (err){
//       console.log(err);
//       console.log("Unable to find message with id: ", req.params.message_id)
//       res.json({result:"failure", message:"Unable to find message with requested ID, comment deletion failed", errors:err})
//     } else {
//
//       for (var i = 0; i < message.comments.length; i++){
//         if (message.comments[i]._id == req.params.comment_id){
//           message.comments.splice(i,1);
//           break;
//         }
//       }
//       message.save(function(message_error){
//         if (message_error){
//           console.log(message_error);
//           res.json({result:"failure", message:"Error during comment deletion", errors:message_error})
//         } else {
//           console.log("comment deleted successfully")
//           res.json({result:"success", message:"Successfully deleted comment from message"})
//         }
//
//       })
//     }
//
//   })
// }
