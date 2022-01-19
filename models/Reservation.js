const mongoose = require('mongoose');

const  {ObjectId}=mongoose.Schema;
const reservationSchema= new mongoose.Schema({

      departure:{type:ObjectId,ref:"Flight"},
      return:{type:ObjectId,ref:"Flight"},
      user:{type:ObjectId,ref:"User"},
      price:{type:String},
      cabin:{type:String},
      bookingNumber:{type:String},
      depSeats:{type:String},
      retSeats:{type:String},
      NumberofAdults:{type:String},
      NumberofChildren:{type:String},
},
{timestamps : true}
);
module.exports = mongoose.model("Reservation",reservationSchema);