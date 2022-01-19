const express =require('express');
const Flight = require('../models/flight.js');
const Reservation = require('../models/reservation');
const User =require('../models/user');

exports.getFlights =(req,res)=>{
  const flights= Flight.find()
  .then(flights=> {
    res.status(200).json(flights)
  })
  .catch(err => console.log(err));
};

exports.getFlight =(req,res)=>{
  const flight= Flight.findById(req.params.flightid)
  .then(flight=> {
    res.status(200).json(flight)
  })
  .catch(err => console.log(err));
};

exports.createFlight= (req,res) => {
const flight = new Flight(req.body);
flight.save()
.then(result=>{
 res.status(200).json({
   flight:result
 });
});
};

exports.deleteFlights=(req,res)=>{
  Flight.findByIdAndDelete(req.params.flightId).exec().then(result =>{
  
    res.status(200).send("User Deleted ");
    console.log("The User is deleted successfully !");
}).catch(err => {
    console.log(err);
  });

}

exports.searchListings = async (req,res)=>{
const {flight_number,departure_time,arrival_number
  ,departure_date,arrival_date,to,from}=req.body;
if(flight_number!="undefined"  & departure_time!="undefined" & arrival_number!="undefined" & departure_date!="undefined" & arrival_date!="undefined" & to!="undefined" & from!="undefined"){
let result2= await Flight.find({flight_number,departure_time,arrival_number,departure_date,arrival_date,to,from});
res.json(result2);
}
if(flight_number!="undefined"& departure_time=="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to=="undefined" &from=="undefined"){
  let result2= await Flight.find({flight_number});
res.json(result2);
}
if(flight_number=="undefined"& departure_time!="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to=="undefined" &from=="undefined"){
  let result2= await Flight.find({departure_time});
res.json(result2);
}
if(flight_number=="undefined"& departure_time=="undefined" & arrival_number!="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to=="undefined" &from=="undefined"){
  let result2= await Flight.find({arrival_number});
res.json(result2);
}
if(flight_number=="undefined"& departure_time=="undefined" & arrival_number=="undefined" &departure_date!="undefined" &arrival_date=="undefined"& to=="undefined" &from=="undefined"){
  let result2= await Flight.find({departure_date});
res.json(result2);
}
if(flight_number=="undefined"& departure_time=="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date!="undefined"& to=="undefined" &from=="undefined"){
  let result2= await Flight.find({arrival_date});
res.json(result2);
}
if(flight_number=="undefined"& departure_time=="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to!="undefined" &from=="undefined"){
  let result2= await Flight.find({to});
res.json(result2);
}

if(flight_number=="undefined"& departure_time=="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to=="undefined" &from!="undefined"){
  let result2= await Flight.find({from});
res.json(result2);
}
if(flight_number=="undefined"& departure_time=="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to!="undefined" &from!="undefined"){
  let result2= await Flight.find({to,from});
res.json(result2);
}
if(flight_number=="undefined"& departure_time!="undefined" & arrival_number!="undefined" &departure_date!="undefined" &arrival_date!="undefined"& to=="undefined" &from=="undefined"){
  let result2= await Flight.find({departure_time,arrival_number,departure_date,arrival_date});
res.json(result2);
}
if(flight_number!="undefined"& departure_time=="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to!="undefined" &from!="undefined"){
  let result2= await Flight.find({flight_number,to,from});
res.json(result2);
}
if(flight_number=="undefined"& departure_time!="undefined" & arrival_number!="undefined" &departure_date=="undefined" &arrival_date=="undefined"& to=="undefined" &from=="undefined"){
  let result2= await Flight.find({departure_time,arrival_number});
res.json(result2);
}
if(flight_number=="undefined"& departure_time=="undefined" & arrival_number=="undefined" &departure_date!="undefined" &arrival_date!="undefined"& to=="undefined" &from=="undefined"){
  let result2= await Flight.find({departure_date,arrival_date});
res.json(result2);
}
if(flight_number=="undefined"& departure_time!="undefined" & arrival_number!="undefined" &departure_date!="undefined" &arrival_date!="undefined"& to!="undefined" &from!="undefined"){
  let result2= await Flight.find({departure_time,arrival_number,departure_date,arrival_date,to,from});
res.json(result2);
}
if(flight_number!="undefined"& departure_time=="undefined" & arrival_number=="undefined" &departure_date=="undefined" &arrival_date!="undefined"& to!="undefined" &from!="undefined"){
  let result2= await Flight.find({flight_number,arrival_date,to,from});
res.json(result2);
}
if(flight_number!="undefined"& departure_time=="undefined" & arrival_number=="undefined" &departure_date!="undefined" &arrival_date=="undefined"& to!="undefined" &from!="undefined"){
  let result2= await Flight.find({flight_number,departure_date,to,from});
res.json(result2);
}

} 



exports.updateflight=async (req,res)=>{
  console.log(req.body);
  console.log(req.params.flightId);

    Flight.findByIdAndUpdate(req.params.flightId,req.body).then(result =>{
        res.status(200).send("Flight updated ");
        console.log('The Flight is Updated successfully !');
    }).catch(err => {
        console.log(err);
      });
  };
 



  exports.getReservations =async (req,res)=>{
    
      console.log(req.headers.authorization);
      const reservation = await Reservation.find({user:req.headers.authorization})
      .select('flight')
      .populate('departure')
      .populate('return')
      .select('price')
      .select('cabin')
      .select('bookingNumber')
      .select('depSeats')
      .select('retSeats')
      .exec();
      console.log(reservation)
      res.json(reservation);
        };


