var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/login_and_registration_db');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email:{
    type:String,
    required:[true, "Email is required"],
    unique:true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email address'
    ]
  },
  first_name:{
    type:String,
    required:[true, "First name is required"],
    minlength:[2, "First name must be at least 2 characters"],
    match:[/^[A-Za-z]+$/, "First name can only contain letters"]
  },
  last_name:{
    type:String,
    required:[true, "Last name is required"],
    minlength:[2, "Last name must be at least 2 characters"],
    match:[/^[A-Za-z]+$/, "Last name can only contain letters"]
  },
  password:{
    type:String,
    required:[true, "Password is required"]
  },
  birthday:{
    type:Date,
    required:[true, "Birthday is required"]
  },

}, {timestamps:true});

mongoose.model('User', UserSchema);
