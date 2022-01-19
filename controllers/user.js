const express =require('express');
const Flight = require('../models/flight.js');
const User =  require('../models/user.js');
const Reservation = require('../models/reservation');

exports.searchListings = async (req,res)=>{
    const {departure_time,arrival_number
,departure_date,arrival_date,to,from}=req.body;


    if(  departure_time!="undefined" & arrival_number!="undefined" & departure_date!="undefined" & arrival_date!="undefined" & to!="undefined" & from!="undefined"){
    let result2= await Flight.find({departure_time,arrival_number,departure_date,arrival_date,to,from});
   return res.json(result2);
  
    }
    if( departure_time!="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to=="undefined" &from=="undefined"){
      let result2= await Flight.find({departure_time});
   return res.json(result2);
  
    }
    if(departure_time=="undefined" & arrival_number!="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to=="undefined" &from=="undefined"){
      let result2= await Flight.find({arrival_number});
   return res.json(result2);
  
    }
    if( departure_time=="undefined" & arrival_number=="undefined" &departure_date!="undefined" &arrival_date=="undefined"& to=="undefined" &from=="undefined"){
      let result2= await Flight.find({departure_date});
   return res.json(result2);
  
    }
    if( departure_time=="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date!="undefined"& to=="undefined" &from=="undefined"){
      let result2= await Flight.find({arrival_date});
   return res.json(result2);
  
    }
    if( departure_time=="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to!="undefined" &from=="undefined"){
      let result2= await Flight.find({to});
   return res.json(result2);
  
    }
    
    if( departure_time=="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to=="undefined" &from!="undefined"){
      let result2= await Flight.find({from});
   return res.json(result2);
  
    }
    if( departure_time=="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to!="undefined" &from!="undefined"){
      let result2= await Flight.find({to,from});
   return res.json(result2);
  
    }
    if( departure_time!="undefined" & arrival_number!="undefined" &departure_date!="undefined" &arrival_date!="undefined"& to=="undefined" &from=="undefined"){
      let result2= await Flight.find({departure_time,arrival_number,departure_date,arrival_date});
   return res.json(result2);
  
    }
    if(departure_time=="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to!="undefined" &from!="undefined"){
      let result2= await Flight.find();
   return res.json(result2);
  
    }
    if( departure_time!="undefined" & arrival_number!="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to=="undefined" &from=="undefined"){
      let result2= await Flight.find({departure_time,arrival_number});
   return res.json(result2);
  
    }
    if( departure_time=="undefined" & arrival_number=="undefined" &departure_date!="undefined" &arrival_date!="undefined"& to=="undefined" &from=="undefined"){
      let result2= await Flight.find({departure_date,arrival_date});
   return res.json(result2);
  
    }
    if( departure_time!="undefined" & arrival_number!="undefined" &departure_date!="undefined" &arrival_date!="undefined"& to!="undefined" &from!="undefined"){
      let result2= await Flight.find({departure_time,arrival_number,departure_date,arrival_date,to,from});
      return res.json(result2);
     
    }
    if(departure_time=="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date!="undefined"& to!="undefined" &from!="undefined"){
      let result2= await Flight.find({arrival_date,to,from});
       return res.json(result2);
      
    }
    if(departure_time=="undefined" & arrival_number=="undefined" &departure_date!="undefined" &arrival_date=="undefined"& to!="undefined" &from!="undefined"){
      let result2= await Flight.find({departure_date,to,from});
     return res.json(result2);
      
    }
   
}
exports.searchReturnListings = async (req,res)=>{
  const {to1,from1}=req.body;
  let to=to1;
  let from=from1;
  let result2= await Flight.find({to,from});
  return res.json(result2);
}

exports.updateUser=async (req,res)=>{
 
  console.log(req.params.userid);

    User.findByIdAndUpdate(req.params.userid,req.body).then(result =>{
        res.status(200).send("User updated ");
        console.log('The User is Updated successfully !');
    }).catch(err => {
        console.log(err);
      });
  };
      
  exports.getUser =async(req,res)=>{
    console.log(req.headers.authorization)
    const user= await User.find({_id:req.headers.authorization})
    .select()
    .exec()
res.json(user);
    
  };

  