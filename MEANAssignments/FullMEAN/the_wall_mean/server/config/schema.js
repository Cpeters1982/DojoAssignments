var mongoose = require('mongoose')
var bcrypt = require('bcrypt')

mongoose.connect('mongodb://localhost/the_wall_db');
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
  messages:[{type:Schema.Types.ObjectId, ref:'Message'}],
  comments:[{type:Schema.Types.ObjectId, ref:'Comment'}]

}, {timestamps:true});

UserSchema.pre('save', function(done){
  if (!this.isModified('password')){return done()};
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  done();
})


var CommentSchema = new Schema({
  _user:{type:Schema.Types.ObjectId, ref:'User'},
  _post:{type:Schema.Types.ObjectId, ref:'Message'},
  text:{type:String, required:true}
}, {timestamps:true});

var MessageSchema = new Schema({
  _user:{type:Schema.Types.ObjectId, ref:'User'},
  text:{type:String, required:true},
  comments:[{type:Schema.Types.ObjectId, ref:'Comment'}]
}, {timestamps:true});

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
mongoose.model('User', UserSchema);
