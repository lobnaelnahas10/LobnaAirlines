const express =require('express');
const Reservation = require('../models/reservation');
const User =require('../models/user');
const Flight =require('../models/flight');
const nodemailer = require("nodemailer")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.createReservation= (req,res) => {
    const reservation= new Reservation(req.body);
    reservation.save()
.then(result=>{
 res.status(200).json({
    reservation:result
 });
});
    };
      exports.getReservation =(req,res)=>{

        const reservation= Reservation.findById(req.params.reservationId)
        .then(reservation=> {
          res.status(200).json(reservation)
        })
        .catch(err => console.log(err));
      };
      
exports.cancelReservations=(req,res)=>{
  console.log("EMAIL:"+req.headers.authorization);
  
          Reservation.findByIdAndDelete(req.params.reservationId).exec().then(result =>{
          res.status(200).send("Reservation Cancelled ");
          console.log("The Reservation is cancelled successfully !");
          transporter.sendMail({from:"marwa7aGuc@gmail.com",to:req.headers.authorization,subject:"Reservation Cancellation" , text:"reservation cancelled successfully" });
      }).catch(err => {
          console.log(err);
        });
      
      }    

     const transporter =nodemailer.createTransport({
       service:"gmail",
       auth: {
         user:"marwa7aGuc@gmail.com",
         pass:"marwa7a2021"
       }
     });

    

 
    exports.payReservation=(req, res) => {
      stripe.charges.create(
        {
          source: req.body.token.id,
          amount: req.body.amount,
          currency: "usd",
        },
        (stripeErr, stripeRes) => {
          if (stripeErr) {
            res.status(500).json(stripeErr);
          } else {
            console.log(stripeRes)
            res.status(200).json(stripeRes);
            transporter.sendMail({from:"marwa7aGuc@gmail.com",to:req.headers.authorization,subject:"Reservation Booking" , text:"Reservation is set Successfully" });
          }
        }
      );
    };
    exports.sendReservation= (req,res)=>{
      console.log(req.headers.authorization)
      const reservation= Reservation.findById(req.params.reservationId)
      .then(reservation=> {
        res.status(200).json(reservation)
        transporter.sendMail({from:"marwa7aGuc@gmail.com",to:req.headers.authorization,subject:"Reservation Details" , text:"Booking Number:"+JSON.stringify(reservation.bookingNumber)+"price"+JSON.stringify(reservation.price)+"Cabin"+JSON.stringify(reservation.cabin)+"Seats In departure flight"+JSON.stringify(reservation.depSeats)+"Seats In return flight"+JSON.stringify(reservation.retSeats)});
      })
      .catch(err => console.log(err));
       
    }

    
exports.updateReservation=async (req,res)=>{
  console.log(req.body.depSeats);
  console.log(req.params.reservationId);



    Reservation.findByIdAndUpdate(req.params.reservationId,req.body).then(result =>{
        res.status(200).send("reservation updated ");
        console.log('The Reservation is Updated successfully !');
    }).catch(err => {
        console.log(err);
      });
  };
 