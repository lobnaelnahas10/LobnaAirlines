import axios from "axios";
import { useState,useEffect } from "react";
import {useSelector,serSelector,useStore} from 'react-redux';
import {ArrowDownOutlined} from '@ant-design/icons';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import '../index.css'
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
const ViewAllReservations =() =>{

const[firstB,setFirstb]=useState(false);
const[sec,setSecb]=useState(true);

const[id,setid]=useState('');
const[id1,setid1]=useState('');


    const [flights,setFlights]=useState([]);
    const [flight1,setflight1]=useState('');
    const [flight2,setflight2]=useState('');
    const [cabin1,setCabin1]=useState('');
    const [depSeats,setdepSeats]=useState('');
    const [retSeats,setretSeats]=useState('');
    const[NumberofAdults,setNumberofAdults]=useState('');
    const[Numberofchildren,setNumberofchildren]=useState('');
    const[bookingNumber,setbookingNumber]=useState('');
    const[p,setp]=useState('');
    
    const [flight_number,setflight_number]=useState('');
    const [departure_time,setdeparture_time]=useState('');
    const [arrival_number,setarrival_number]=useState('');
    const [departure_date,setdeparture_date]=useState('');
    const [arrival_date,setarrival_date]=useState('');
    const [to,setTo]=useState('');
    const [from,setFrom]=useState('');
    const [price,setPrice]=useState('');
    const [priceChildern,setPriceChildern]=useState('');
    const [numberOfEcoSeats,setnumberOfEcoSeats]=useState('');
    const [numberOfBuisnessSeats,setnumberOfBuisnessSeats]=useState('');
    const [baggage,setBaggage]=useState('');
    const [SeatsOccBus,setSeatsOccBus]=useState([]); 
    const [SeatsOccEco,setSeatsOccEco]=useState([]); 
    
    const [flight_number1,setflight_number1]=useState('');
    const [departure_time1,setdeparture_time1]=useState('');
    const [arrival_number1,setarrival_number1]=useState('');
    const [departure_date1,setdeparture_date1]=useState('');
    const [arrival_date1,setarrival_date1]=useState('');
    const [to1,setTo1]=useState('');
    const [from1,setFrom1]=useState('');
    const [price1,setPrice1]=useState('');
    const [priceChildern1,setPriceChildern1]=useState('');
    const [numberOfEcoSeats1,setnumberOfEcoSeats1]=useState('');
    const [numberOfBuisnessSeats1,setnumberOfBuisnessSeats1]=useState('');
    const [baggage1,setBaggage1]=useState('');
    const [SeatsOccBus1,setSeatsOccBus1]=useState([]); 
    const [SeatsOccEco1,setSeatsOccEco1]=useState([]); 
    
    var a=[];
    var b=[];
    
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    const {auth:{user},} =useSelector((state)=>({...state}));
    const navigate = useNavigate();
   useEffect(()=>{
      
    loadAllFlights();
    },[])

    const headers1 = {
        
        Authorization:`${user._id}`
      }
      const headers2 = {
        
        Authorization:`${user.email}`
      }


const AllFlights = async (t)=> await axios.get("http://localhost:8000/viewAllReservations",{
headers: headers1
});
const firstSeats=async(id)=>{
  if(!window.confirm("Are You Sure You Want to Cancel this Reservation")) return;
  let a1=depSeats.split(",");
  
   console.log(a1);

  for(var i=0;i<a1.length;i++){ 
    var position= parseInt(a1.at(i));
     if(cabin1==='Economy'){
      setSeatsOccEco(SeatsOccEco.splice(position,1,null))
      console.log("1");
   }
   else {
      setSeatsOccBus(SeatsOccBus.splice(position,1,null))
   }
 }
   const data = {flight_number: flight_number,
     departure_time: departure_time, 
     arrival_number:arrival_number,
     departure_date:departure_date,
     arrival_date:arrival_date, 
     numberOfEcoSeats:numberOfEcoSeats,
     numberOfBuisnessSeats: numberOfBuisnessSeats,
     SeatsOccEco: SeatsOccEco,
     SeatsOccBus:SeatsOccBus,
     to:to,
     from:from,
     price:price,
     priceChildern:priceChildern,
     baggage:baggage  
 }    
 console.log("data"+JSON.stringify(data));
 await axios.put(`http://localhost:8000/updateflight/${flight1}`,data);
 secSeats(id);
}
const secSeats=async(id)=>{
  let  b1=retSeats.split(",");
  for(var j=0;j<b1.length;j++){ 
    var position= parseInt(b1.at(j));
     if( cabin1=='Economy'){
     setSeatsOccEco1(SeatsOccEco1.splice(position,1,null))
   }
   else{
   setSeatsOccBus1(SeatsOccBus1.splice(position,1,null))
   }
   
  }
     
   const data1 = {flight_number: flight_number1,
     departure_time: departure_time1, 
     arrival_number:arrival_number1,
     departure_date:departure_date1,
     arrival_date:arrival_date1, 
     numberOfEcoSeats:numberOfEcoSeats1,
     numberOfBuisnessSeats: numberOfBuisnessSeats1,
     SeatsOccEco: SeatsOccEco1,
     SeatsOccBus:SeatsOccBus1,
     to:to1,
     from:from1,
     price:price1,
     priceChildern:priceChildern1,
     baggage:baggage1  
  }    
  console.log("data1"+JSON.stringify(data1));
  await axios.put(`http://localhost:8000/updateflight/${flight2}`,data1);
  await axios.delete(`http://localhost:8000/reservationCancel/${id}`,{
    headers:headers2
  });

  toast("Reservation Cancelled"); 
}
const cancelReservation=async(id)=>{

 firstSeats(id);
}


const handleSelect=async(id)=>{
  const res= await axios.get(`http://localhost:8000/viewReservation/${id}`)
    setflight1(res.data.departure);
    setflight2(res.data.return);
    setdepSeats(res.data.depSeats);
    setretSeats(res.data.retSeats);
    setCabin1(res.data.cabin);
    setNumberofAdults(res.data.NumberofAdults);
    setNumberofchildren(res.data.NumberofChildren);
    setp(res.data.price);
    setbookingNumber(res.data.bookingNumber);
    if(flight1!=""){
    let res1 = await axios.get(`http://localhost:8000/viewFlight/${flight1}`);
    console.log(res1);
    setid(res.data._id);
    setflight_number(res1.data.flight_number);
    setdeparture_time(res1.data.departure_time);
    setarrival_number(res1.data.arrival_number);
    setdeparture_date(res1.data.departure_date);
    setarrival_date(res1.data.arrival_date);
    setTo(res1.data.to);
    setFrom(res1.data.from);
    setPrice(res1.data.price);
    setPriceChildern(res1.data.priceChildern);
    setBaggage(res1.data.baggage);
    setnumberOfEcoSeats(res1.data.numberOfEcoSeats);
    setnumberOfBuisnessSeats(res1.data.numberOfBuisnessSeats);
    setSeatsOccBus(res1.data.SeatsOccBus);
    setSeatsOccEco(res1.data.SeatsOccEco);
    
    let res2 = await axios.get(`http://localhost:8000/viewFlight/${flight2}`);
    setid1(res.data._id);
    setflight_number1(res2.data.flight_number);
    setdeparture_time1(res2.data.departure_time);
    setarrival_number1(res2.data.arrival_number);
    setdeparture_date1(res2.data.departure_date);
    setarrival_date1(res2.data.arrival_date);
    setTo1(res2.data.to);
    setFrom1(res2.data.from);
    setPrice1(res2.data.price);
    setPriceChildern1(res2.data.priceChildern);
    setBaggage1(res2.data.baggage);
    setnumberOfEcoSeats1(res2.data.numberOfEcoSeats);
    setnumberOfBuisnessSeats1(res2.data.numberOfBuisnessSeats);
    setSeatsOccBus1(res2.data.SeatsOccBus);
    setSeatsOccEco1(res2.data.SeatsOccEco);
    setSecb(false);
    setFirstb(true);
  }
}
const loadAllFlights  = async ()=>{
let res = await AllFlights(user._id);
console.log(res);
var x=[];
x=res.data;
setFlights(res.data);
a.length=flights.length;
b.length=flights.length;
for(var i=0;i<flights.length;i++){ 
a.splice(i,1,x.at(i).departure)
b.splice(i,1,x.at(i).return)
}
};
const handleDepSeats =(id)=>{
  navigate(`/updateDepSeats?id=${id}&cabin=${cabin1}`);
}
const handleRetSeats =(id)=>{
  navigate(`/updateRetSeats?id=${id}&cabin=${cabin1}`);
}
const handleDepDiffCabSeats =(id)=>{
  navigate(`/updateRetSeatsDiffCabin?id=${id}&cabin=${cabin1}`);
}
const handleSubmit=(id)=>{
  let  b1=retSeats.split(",");
  let x=b1.length
  console.log(Numberofchildren)
  navigate(`/depAndret?&id=${id}&departure_time=${departure_time}&arrival_number=${arrival_number}&departure_date=${departure_date}&arrival_date=${arrival_date}&to=${to}&from=${from}&to1=${from}&from1=${to}&cabin=${cabin1}&Numberofpassengers=${x}&depSeats=${depSeats}&retSeats=${retSeats}&NumberofAdults=${NumberofAdults}&NumberofChildern=${Numberofchildren}&price=${p}&bookingNumber=${bookingNumber}`);
} ;
const sendReservation=(id)=>{
   axios.get(`http://localhost:8000/sendReservation/${id}`,{headers:headers2});
}

return(
    <>
    <div className="container-fluid p-5 text-center"> 
    <ToastContainer position="top-center" />
    <h1 className="h1">  Reservations 
        </h1>
    </div>
    <div className="container-fluid p-5"></div>
   <div className="row">
      {flights.map((f)=><div className="card border border-dark mb-3"   style={{marginLeft: "15rem",marginRight: "15",width:"70rem"}} key={f.id} f={f}  >
  <div className="card-body">
    <h5 className="h5">Reservation Number:{f.bookingNumber}</h5>
    <hr/>
    <h6 className="h6" className="card-text">Flight Number:{f.departure.flight_number}</h6>
    <h6 className="h6" className="card-text">Departure Date:{f.departure.departure_date}</h6>
    <h6 className="h6" className="card-text">Arrival Date:{f.departure.arrival_date}</h6>
    <h6 className="h6" className="card-text">Departure Time:{f.departure.departure_time}</h6>
    <h6 className="h6" className="card-text">Arrival Time:{f.departure.arrival_number}</h6>
    <h6 className="h6" className="card-text">From:{f.departure.from}</h6>
    <h6 className="h6" className="card-text">To:{f.departure.to}</h6>
    <h6 className="h6" className="card-text">Seats:{f.depSeats} in the {f.cabin}  Class</h6>
    <h4>
    <FlightTakeoffOutlinedIcon fontSize="large" />  
    </h4>
    <h6 className="h6" className="card-text">Flight Number:{f.return.flight_number}</h6>
    <h6 className="h6" className="card-text">Departure Date:{f.return.departure_date}</h6>
    <h6 className="h6" className="card-text">Arrival Date:{f.return.arrival_date}</h6>
    <h6 className="h6" className="card-text">Departure Time:{f.return.departure_time}</h6>
    <h6 className="h6" className="card-text">Arrival Time:{f.return.arrival_number}</h6>
    <h6 className="h6" className="card-text">From:{f.return.from}</h6>
    <h6 className="h6" className="card-text">To:{f.return.to}</h6>
    <h6 className="h6" className="card-text">Seats:{f.retSeats} in the {f.cabin}  Class</h6>
    <h4>  Total Ticket Price = {f.price}</h4>
    <div className=" container fluid">
    <Button onClick={()=>handleSelect(f._id)}>Select This Reservation</Button>
    <Button disabled={sec} onClick={()=>cancelReservation(f._id)}>Cancel Reservation</Button>
    <Button
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        disabled={sec}
      >
        Update
      </Button>
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=>handleDepSeats(f._id)}>Update Departure Flight Seats </MenuItem>
        <MenuItem onClick={()=>handleRetSeats(f._id)}>Update Return Flight Seats </MenuItem>
        <MenuItem onClick={()=>handleDepDiffCabSeats(f._id)}>Update reservation Flights Seats & Cabin </MenuItem>
        <MenuItem onClick={ ()=>handleSubmit(id)}>Update Departure & Return Flights</MenuItem>
        
      </Menu>
      <Button  onClick={()=>sendReservation(f._id)}>Send Reservation to my Email</Button>
  </div>
</div>)}
    </div>
    
</>
)
 
   };


export default ViewAllReservations;