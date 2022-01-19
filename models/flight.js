const mongoose = require('mongoose');
const flightSchema= new mongoose.Schema({
    flight_number:{ type:String,required:true },
    departure_time:{type:String, required:true},
    arrival_number:{type:String,required:true },
    departure_date:{ type:String, required:true },
    arrival_date:{ type:String , required:true},
    numberOfEcoSeats:{type: String ,required:true},
    numberOfBuisnessSeats:{type: String,required:true },
    SeatsOccEco:[{type:Boolean}],
    SeatsOccBus:[{type:Boolean}],
    to:{type: String,required:true },
    from:{type: String,required:true },
    price:{type:String},
    priceChildern:{type:String},
    baggage:{type:String}
});

flightSchema.pre('save', async function(next){
 this.SeatsOccBus.length=parseInt(this.numberOfBuisnessSeats);
 this.SeatsOccEco.length=parseInt(this.numberOfEcoSeats);
});

module.exports = mongoose.model("Flight",flightSchema);


