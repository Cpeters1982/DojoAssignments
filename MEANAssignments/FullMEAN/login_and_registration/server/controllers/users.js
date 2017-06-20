var mongoose = require('mongoose')
var User = mongoose.model('User')
var bcrypt = require('bcrypt')

exports.all = function(req, res){
  User.find({}, function(errors, users){

    if(errors){
      console.log(errors)
      res.json(errors)
    } else {
      // console.log(users)
      res.json(users)
    }

  })
}

exports.create = function(req, res){

  console.log("BODY OF REQUEST: ", req.body)
  // User.findOne({name:req.body.name}, function(err){})

  var newUser = new User(req.body)
  try {
    newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8));
  }catch(e){
    console.log("PASSWORD ENCRYPTION FAILED")
    console.log(e);
  }

  newUser.save(function(err){
    if (err){
      console.log(err)
      res.json({result:"failure", message:"Error during user creation", errors:err})
    } else {
      console.log('new user successfully created')
      res.json({result:"success", message:"Successfully created new user", user:newUser})
    }
  })

}

exports.login = function(req, res){
  console.log("Entered login function")
  if (!req.body.email){
    res.json({result:'failure', message:"Email is required", errors:{errors:{email:{message:"Email is required"}}}})
    return res
  }

  if (!req.body.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    res.json({result:'failure', message:"Email is invalid", errors:{errors:{email:{message:"Please enter a valid email"}}}})
    return res
  }


  User.findOne({email:req.body.email}, function(err, user){
    if (err){
      console.log(err);
      res.json({result:'failure', message:"Unable to find user with Email: " + req.body.email, errors:err})
    } else {
      if (!user) {
        console.log("User not found with email: ", req.body.email)
        res.json({result:'failure', message:"Unable to find user with Email: " + req.body.email, errors:{errors:{email:{message:"User with this email doesn't exist"}}}})
      } else {
        console.log("Found User, checking password...")
        console.log(user)
        try{
          if (bcrypt.compareSync(req.body.password, user.password)){
            console.log("Passwords match, logging in...")
            res.json({result:"success", message:"Successfully authenticated password!", user:user})
          } else {
            console.log("Password authentication failed")
            res.json({result:"failure", message:"Invalid password", errors:{errors:{password:{message:"Password is invalid"}}}})
          }
        } catch (e) {
          console.log("Blank password")
          res.json({result:"failure", message:"Invalid password", errors:{errors:{password:{message:"Password is required"}}}})
        }

      }

    }
  })
}

// exports.update = function(req, res){
//   var id = req.params.user_id;
//
//   console.log("REQUEST BODY:", req.body)
//
//   User.findOneAndUpdate({_id:id}, {$set:req.body}, {new:true}, function(err, user){
//     if (err){
//       console.log(err)
//       res.json({result:'failure', message:"Unable to find user with ID: " + id, errors:err})
//     } else {
//       console.log("Updated user", user)
//       res.json({result:'success', message:"Successfully updated user", user:user})
//     }
//   })
//
// }

// exports.delete = function(req, res){
//   User.deleteOne({_id:req.params.user_id}, function(err){
//     if(err){
//       console.log(err);
//       res.json({result:"failure", message:"Error during user deletion"})
//     } else {
//       console.log("Successfully deleted user")
//       res.json({result:"success", message:"Successfully deleted user"})
//     }
//   })
// }
