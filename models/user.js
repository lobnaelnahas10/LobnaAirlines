const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


const userSchema= new mongoose.Schema({

      firstName:{type: String , required: true},
      lastName:{type:String,required:true}, 
      userName:{type:String, required:true},
      homeAddress:{type:String,required:true},
      countryCode:{type:String,required:true}, 
      telephoneNumber:{type:String,required:true},
      email:{type:String,required:true} ,
      passportNumber:{type:String,required:true},
      password:{type:String,required:true},
      role:{type:String,default:"NormalUser"},
      
    
},
{timestamps : true}
);

userSchema.methods.comparePassword = function(password,next){
      bcrypt.compare(password,this.password,function(err,match){
          if(err){
              console.log('Compare Failed');
              return next(err,false);
          }
          return next(null,match); //true
      })
  }
  
  userSchema.pre("save", function (next) {
    let user = this;
    if (user.isModified("password")) {
      return bcrypt.hash(user.password, 12, function (err, hash) {
        if (err) {
          console.log("BCRYPT HASH ERR ", err);
          return next(err);
        }
        user.password = hash;
        return next();
      });
    } else {
      return next();
    }
  });


module.exports = mongoose.model("User",userSchema);