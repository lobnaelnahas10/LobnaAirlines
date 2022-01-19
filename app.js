const express = require('express');
const app= express();
const morgan=require('morgan');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
var cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const nodemailer = require("nodemailer");
const cors=require('cors');
dotenv.config();
var bcrypt = require('bcryptjs');


//db connection
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true ,useUnifiedTopology: true
})
.then(()=>console.log('DB is connected'))
mongoose.connection.on('error',err=>{
    console.log(`DB connection error: ${err.message}`);
});
//bring routes
const flightRoutes=require('./routes/flight.js');
const userRoutes=require('./routes/user.js');
const reservationRoutes=require('./routes/reservation.js');

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser())
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(expressValidator());

    
app.use("/",flightRoutes);
app.use("/",userRoutes);
app.use("/",reservationRoutes);

const port=process.env.PORT||8000;
app.listen(port,()=>{console.log(`connected to port 8000`)});