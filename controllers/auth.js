const User=  require('../models/user.js');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  // console.log(req.body);
  const { userName, password } = req.body;
  try {
    // check if user with that email exist
    let user = await User.findOne({ userName }).exec();
    // console.log("USER EXIST", user);
    if (!user) res.status(400).send("User with that email not found");
    // compare password
    user.comparePassword(password, (err, match) => {
      console.log("COMPARE PASSWORD IN LOGIN ERR", err);
      if (!match || err) return res.status(400).send("Wrong password");
      // GENERATE A TOKEN THEN SEND AS RESPONSE TO CLIENT
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.json({
        token,user:{
          _id:user._id,
         userName:user.userName,
         role:user.role,
         email:user.email,}});
    });
  } catch (err) {
    console.log("LOGIN ERROR", err);
    res.status(400).send("Signin failed");
  }
};


  exports.createUser= (req,res) => {
    const user = new User(req.body);
    user.save()
    .then(result=>{
     res.status(200).json({
       User:result
     });
    });
    };

    exports.resetPassword = (req, res) => {
      const {userName, oldPassword, newPassword } = req.body;
      
      User.findOne({ userName }, (err, user) => {
          // if err or no user
          user.comparePassword(oldPassword, (err, match) => {
            console.log("COMPARE PASSWORD IN LOGIN ERR", err);
            if (!match || err) return res.status(400).send("Wrong password");
   
          const updatedFields = {
              password: newPassword,
          };
   
          user = _.extend(user, updatedFields);
          user.updated = Date.now();
   
          user.save((err, result) => {
              if (err) {
                  return res.status(400).json({
                      error: err
                  });
              }
              res.json({
                  message: `Great! Now you can login with your new password.`
              });
         
            });
      });
    });
  }

   