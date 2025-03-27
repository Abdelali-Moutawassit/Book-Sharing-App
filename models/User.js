const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({

userfirstname: { 
    type: String,
    unique: true },
usersecondename: { 
    type: String, 
    unique: true },
password:{
  type: String,
  required: true
},
avatar: {
  type: String,
  required: true
},
nationallite:{
    type: String,
    required: true
},
tele:{
    type: String,
    required: true
},
sex:{
    type: String,
    required: true
},
email: { 
    type: String, 
    unique: true 
},
books: {
  type: Array,
  default: []
}
});

userSchema.methods.hashPassword = (password) =>{
  return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = (password,hash) => {
  return bcrypt.compareSync(password,hash)
}


module.exports = mongoose.model('User', userSchema);
