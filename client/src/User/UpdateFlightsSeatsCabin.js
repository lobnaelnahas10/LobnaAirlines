import axios from "axios";
import { useState,useEffect } from "react";
import queryString from 'query-string';
import {ArrowRightOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Tabs } from 'antd';
import { Card } from 'antd';
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Steps, Popover } from 'antd';
import { set } from "mongoose";
import { ToastContainer,toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';
 import { useNavigate } from "react-router-dom";
 import StripeCheckout from "react-stripe-checkout";
 import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
 import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
 import Button from '@mui/material/Button';
 import FeedIcon from '@mui/icons-material/Feed';
const { TabPane } = Tabs;
const { Step } = Steps;
const ViewAllFlights =()=>{


const [show1, setShow1] = useState(true);
const [showConfirm, setShowConirm] = useState(false);
const[flights,setFlights]=useState([]);
const[flights2,setFlights2]=useState([]);
const[pricePrev,setPricePrev]=useState('');
const[ReservationId,setReservationId]=useState('');
const[bookingNumber,setbookingNumber]=useState('');

const[cabin2,setcabin2]=useState('');
const [id,setid]=useState('');
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
const [NumberofAdults,setNumberofAdults]=useState('');
const[NumberofChildern,setNumberofchildern]=useState('');
const [SeatsOccBus,setSeatsOccBus]=useState([]); 
const [SeatsOccEco,setSeatsOccEco]=useState([]); 

const[cabin,setCabin]=useState('');
const [depSeats,setdepSeats]=useState('');
const [retSeats,setretSeats]=useState('');

const {auth} =useSelector((state)=>({...state}));
const {auth:{user}} =useSelector((state)=>({...state}));
const [id1,setid1]=useState('');
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
const [NumberofAdults1,setNumberofAdults1]=useState('');
const[NumberofChildern1,setNumberofchildern1]=useState('');
const [baggage1,setBaggage1]=useState('');
const [SeatsOccBus1,setSeatsOccBus1]=useState([]); 
const [SeatsOccEco1,setSeatsOccEco1]=useState([]); 
var a=[];
var b=[];
const navigate = useNavigate();
const headers = {
  'Content-Type': 'application/json',
  
}
const calc=()=>{
    
  var x =parseInt(price)*parseInt(NumberofAdults)+parseInt(priceChildern);
  var y =parseInt(price1)*parseInt(NumberofAdults1)+parseInt(priceChildern1)
  return x+y;
}
 
const handleUpdate =async()=>{
    let a1=depSeats.split(",");
    console.log(a1);
   for(var i=0;i<a1.length;i++){ 
     var position= parseInt(a1.at(i));
      if(cabin2==='Economy'){
       setSeatsOccEco(SeatsOccEco.splice(position,1,null))
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
  await axios.put(`http://localhost:8000/updateflight/${id}`,data);
  handleUpdate1();
 }
 const handleUpdate1 =async()=>{
    let a1=retSeats.split(",");
    console.log(a1);
   for(var i=0;i<a1.length;i++){ 
     var position= parseInt(a1.at(i));
      if(cabin2==='Economy'){
       setSeatsOccEco1(SeatsOccEco1.splice(position,1,null))
    }
    else {
       setSeatsOccBus1(SeatsOccBus1.splice(position,1,null))
    }
  }
    const data = {flight_number: flight_number1,
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
  console.log("data"+JSON.stringify(data));
  await axios.put(`http://localhost:8000/updateflight/${id1}`,data);
 Confirm();
 }
const sendReservation=async()=>{
  var p=price*NumberofAdults+priceChildern*NumberofChildern+price1*NumberofAdults1+priceChildern1*NumberofChildern1;
  var s=a.join();
  var s1=b.join();
   let user1=user._id;
   axios.put(`http://localhost:8000/updateReservation/${ReservationId}`,({departure:id,return:id1,user:user1,price:p,cabin:cabin,bookingNumber:bookingNumber,depSeats:s,retSeats:s1,NumberofAdults:NumberofAdults,NumberofChildern:NumberofChildern}),{headers:headers});
   setShowConirm(true);
}
const ConfirmSecFlight=async()=>{
  console.log("B="+b.length);
  for(var j=0;j<b.length;j++){ 
    var position= parseInt(b.at(j));
     if( cabin2=='Economy'){
     setSeatsOccEco1(SeatsOccEco1.splice(position,1,true))
   }
   else{
   setSeatsOccBus1(SeatsOccBus1.splice(position,1,true))
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
  await axios.put(`http://localhost:8000/updateflight/${id1}`,data1);
  sendReservation();
}
const Confirm=async()=>{
  console.log("a="+a.length);
  for(var i=0;i<a.length;i++){ 
   var position= parseInt(a.at(i));
    if(cabin2==='Economy'){
     setSeatsOccEco(SeatsOccEco.splice(position,1,true))
  }
  else {
     setSeatsOccBus(SeatsOccBus.splice(position,1,true))
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
await axios.put(`http://localhost:8000/updateflight/${id}`,data);
ConfirmSecFlight();
}
const handleInput1=(e)=>{
    let d =retSeats.split(",");
    var x=d.length;
 if(b.length<x && !b.includes(e)){
  b.push(e);
  toast(" Return Flight Seats Selected "+b);
 }
 else if(b.includes(e)){
  var z=b.indexOf(e);
   b.splice(z,1)
   toast("You Removed Seat"+e+" Return Flight Seats Selected ="+b);
 }
 
 console.log(b);
  } 

const handleInput=(e)=>{
    let d =retSeats.split(",");
    var x=d.length;
   if(a.length<x && !a.includes(e)){
    a.push(e);
    toast(" Departure Flight Seats Selected "+a);
   }
   else if(a.includes(e)){
    var z=a.indexOf(e);
     a.splice(z,1)
      toast("You Removed Seat"+e+" Departure Flight Seats Selected ="+a);
   }
   console.log(a);
   
    } 
    const handleBack=()=>{
      navigate("/");
    }
  
const OCC=(array,c)=>{

return array[c];
}
const getCabin=()=>{
  return cabin2;
}
 const handleSubmit=async (id)=>{
 let res = await axios.get(`http://localhost:8000/viewFlight/${id}`);
 setid(res.data._id);
 setflight_number(res.data.flight_number);
 setdeparture_time(res.data.departure_time);
 setarrival_number(res.data.arrival_number);
 setdeparture_date(res.data.departure_date);
 setarrival_date(res.data.arrival_date);
 setTo(res.data.to);
 setFrom(res.data.from);
 setPrice(res.data.price);
 setPriceChildern(res.data.priceChildern);
 setBaggage(res.data.baggage);
 setnumberOfEcoSeats(res.data.numberOfEcoSeats);
 setnumberOfBuisnessSeats(res.data.numberOfBuisnessSeats);
 setSeatsOccBus(res.data.SeatsOccBus);
setSeatsOccEco(res.data.SeatsOccEco);
toast("You Selected the Departure Flight with FlightNumber="+res.data.flight_number+"  "+"Now choose a Return Flight");

}
const handleSubmit2=async(id)=>{
  let res = await axios.get(`http://localhost:8000/viewFlight/${id}`);
  setid1(res.data._id);
  setflight_number1(res.data.flight_number);
  setdeparture_time1(res.data.departure_time);
  setarrival_number1(res.data.arrival_number);
  setdeparture_date1(res.data.departure_date);
  setarrival_date1(res.data.arrival_date);
  setTo1(res.data.to);
  setFrom1(res.data.from);
  setPrice1(res.data.price);
  setPriceChildern1(res.data.priceChildern);
  setBaggage1(res.data.baggage);
  setnumberOfEcoSeats1(res.data.numberOfEcoSeats);
  setnumberOfBuisnessSeats1(res.data.numberOfBuisnessSeats);
  setSeatsOccBus1(res.data.SeatsOccBus);
 setSeatsOccEco1(res.data.SeatsOccEco);
 toast("You Selected the Return Flight with FlightNumber="+res.data.flight_number+"  "+"Now choose the Seats for the selected Departure Flight");

 }
const viewSum=()=>{
  
  setShow1(true);
  
}
 const loop=(id)=>{
   let x;
   let x1=[];
  for(var i=0;i<id;i++){
  x= i;
   x1.push(x)
  }
  return x1;
 }
 const onToken = async (token) => {   
    const res = await axios.post("http://localhost:8000/payment", {
                            token,
                            amount: (price*NumberofAdults+priceChildern*NumberofChildern+price1*NumberofAdults1+priceChildern1*NumberofChildern1)*100,
                          });
                          if(res.status==200){
                            handleUpdate();
                          }
                          else{

                          }
  };
    useEffect(()=>{
    const {id,departure_time,arrival_number,departure_date,arrival_date,to,from,to1,from1,cabin,depSeats,retSeats,NumberofAdults,NumberofChildren,price,bookingNumber}=queryString.parse(window.location.search);
      setReservationId(id)
      setCabin(cabin);
      setdepSeats(depSeats);
      setretSeats(retSeats);
      setNumberofchildern(NumberofChildren);
      setNumberofAdults(NumberofAdults);
      setNumberofchildern1(NumberofChildren);
      setNumberofAdults1(NumberofAdults);
      setPricePrev(price)
      setbookingNumber(bookingNumber);
        AllFlights({departure_time,arrival_number,departure_date,arrival_date,to,from})
        .then(res=>{
                setFlights(res.data);
                console.log(flights)
            })
            AllFlights2({departure_time,arrival_number,departure_date,arrival_date,to1,from1})
        .then(res=>{
                setFlights2(res.data);
                console.log(flights2)
            })
           
    },[window.location.search]);

    const AllFlights = async (query)=> await axios.post("http://localhost:8000/searchresults",query);
    const AllFlights2 = async (query)=> await axios.post("http://localhost:8000/searchReturnresults",query);
    const calc1=()=>{
       var a1=calc();
        var b1=parseInt(pricePrev);
        var c1=parseInt("100");
        return ((a1-b1)*100)+100;
    }
    
return(
    <>
    <div className="container-fluid p-5">
      {showConfirm==true &&(
    <div className="alert alert-primary" >
       Reservation Updated
      </div>
      )}
    <ToastContainer position="top-center" />
    <div className="container-fluid p-5 text-center"> 
    <h1 className="h1"> Departure Flights
        </h1>
    </div>


    <div className="Card" >
   {flights.map((f)=><div className="card border border-dark mb-3"   style={{width:"100rem",height:"25rem"}} key={f.id} f={f}  >
<Tabs  type="card" centered>
<TabPane tab={
        <span>
          <AirplaneTicketIcon fontSize="large"/>  
         
        </span>
      } key="1">
   <h1 className="h1" >   From: {f.from} <FlightTakeoffOutlinedIcon fontSize="large" />  
      <span>&nbsp;&nbsp;</span>
      To: {f.to}
      </h1>
      <div>
      <select className="select border"    onChange={(event) => setcabin2(event.target.value)}   id="cabin"  style={{ height: "50px", width: "250px" }} >
    <option disabled="true" selected>---Choose Cabin Class---</option>
    <option value="Economy">Economy</option>
    <option value="Business">Business</option>
    </select>
      <Button  variant="secondary lg"  onClick={()=>handleSubmit(f._id)}> SELECT</Button>
      </div>
    
    </TabPane>
    <TabPane tab={
        <span>
          <FeedIcon fontSize="large"/>  
          Details
        </span>} key="2">
     <h5  className="h6">  <span>&nbsp;&nbsp;</span> Flight Number: {f.flight_number}</h5>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  Departure Time: {f.departure_time} </h6>
     <h6 className="h6"><span>&nbsp;&nbsp;</span>  Arrival Time: {f.arrival_number}</h6>
     <h6 className="h6">  <span>&nbsp;&nbsp;</span>  Departure Date: {f.departure_date}</h6>
     <h6 className="h6"><span>&nbsp;&nbsp;</span>  Arrival Date: {f.arrival_date}</h6>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  To: {f.to} </h6>
     <h6 className="h6">  <span>&nbsp;&nbsp;</span> From: {f.from}</h6>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  Price: {f.price}</h6>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  Baggage Allowance: {f.baggage}</h6>
    </TabPane>

    <TabPane tab="Choose Seats" key="3" >
    
<>
      { getCabin()==='Economy'&&(
        <>
      {(loop(f.numberOfEcoSeats)).map(c => ( 
        <>
        { OCC(f.SeatsOccEco,c)==null && (
        <Button value={c} key={c}  onClick={()=>handleInput(c)} data-bs-toggle="button"variant="secondary lg" >E{c} </Button>
        )
        }
        </>
      ))}
      </>
      )}
 { getCabin()==='Business'&&(
      <>
    {(loop(f.numberOfBuisnessSeats)).map(c => ( 
      <>
      { OCC(f.SeatsOccBus,c)==null && (
      <Button value={c} key={c}  onClick={()=>handleInput(c)} data-bs-toggle="button"variant="secondary lg" >B{c} </Button>
      )
      }
      </>
    ))}
    </>
    )}
        </>


    </TabPane>
  </Tabs>
</div>)}
    </div>
    <div className="container-fluid p-5 text-center"> 
    <h1 className="h1"> Return Flights
        </h1>
    </div>
    <div className="row" >
      {flights2.map((f1)=><div className="card border border-dark mb-3"   style={{width:"100rem",height:"25rem"}} key={f1.id} f1={f1}  >
<Tabs  type="row" centered>
<TabPane tab={
        <span>
          <AirplaneTicketIcon fontSize="large"/>  
         
        </span>
      } key="1">
   <h1 className="h1" >   From: {f1.from} <FlightTakeoffOutlinedIcon fontSize="large" />  
      <span>&nbsp;&nbsp;</span>
      To: {f1.to}
      </h1>
      <div>
      <select className="select border" onChange={(event) => setcabin2(event.target.value)}   id="cabin"  style={{ height: "50px", width: "250px" }} >
    <option disabled="true" selected>---Choose Cabin Class---</option>
    <option value="Economy">Economy</option>
    <option value="Business">Business</option>
    </select>
    <Button  variant="secondary lg"  onClick={()=>handleSubmit2(f1._id)}> SELECT</Button>
      </div>
    
    </TabPane>
    <TabPane tab={
        <span>
          <FeedIcon fontSize="large"/>  
          Details
        </span>} key="2">
     <h5  className="h6">  <span>&nbsp;&nbsp;</span> Flight Number: {f1.flight_number}</h5>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  Departure Time: {f1.departure_time} </h6>
     <h6 className="h6"><span>&nbsp;&nbsp;</span>  Arrival Time: {f1.arrival_number}</h6>
     <h6 className="h6">  <span>&nbsp;&nbsp;</span>  Departure Date: {f1.departure_date}</h6>
     <h6 className="h6"><span>&nbsp;&nbsp;</span>  Arrival Date: {f1.arrival_date}</h6>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  To: {f1.to} </h6>
     <h6 className="h6">  <span>&nbsp;&nbsp;</span> From: {f1.from}</h6>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  Price: {f1.price}</h6>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  Baggage Allowance: {f1.baggage}</h6>
    </TabPane>
    <TabPane tab="Choose Seats"  key="3">
      
<>
    { getCabin()==='Economy'&&(
        <>
      {(loop(f1.numberOfEcoSeats)).map(c => ( 
        <>
        { OCC(f1.SeatsOccEco,c)==null && (
        <Button value={c} key={c}  onClick={()=>handleInput1(c)} data-bs-toggle="button"variant="secondary lg" >E{c} </Button>
        )
        }
        </>
      ))}
      </>
      )}
 { getCabin()==='Business'&&(
      <>
    {(loop(f1.numberOfBuisnessSeats)).map(c => ( 
      <>
      { OCC(f1.SeatsOccBus,c)==null && (
      <Button value={c} key={c}  onClick={()=>handleInput1(c)} data-bs-toggle="button"variant="secondary lg" >B{c} </Button>
      )
      }
      </>
    ))}
    </>
    )}
    </>

    </TabPane>
  </Tabs>
</div>)}
    </div>
    </div>
    
    
    
        <><div className="container-fluid p-5 text-center">
                <h1 className="h1"> Reservation Summary </h1>
            </div><div className="container">
                    <Card title="Summary">
                        <Card type="inner" title="Departue Flight">
                            Flight Number: {flight_number}  <span>&nbsp;&nbsp;</span>
                            Departure Time: {departure_time}  <span>&nbsp;&nbsp;</span>
                            Arrival Time: {arrival_number} <span>&nbsp;&nbsp;</span>
                            Departure Date: {departure_date} <span>&nbsp;&nbsp;</span>
                            Arrival Date: {arrival_date} <span>&nbsp;&nbsp;</span>
                            To: {to} <span>&nbsp;&nbsp;</span>
                            From: {from}<span>&nbsp;&nbsp;</span>
                            Price: {price}

                        </Card>
                        <Card
                            style={{ marginTop: 16 }}
                            type="inner"
                            title="Return Flight"
                        >
                            Flight Number: {flight_number1}  <span>&nbsp;&nbsp;</span>
                            Departure Time: {departure_time1}  <span>&nbsp;&nbsp;</span>
                            Arrival Time: {arrival_number1} <span>&nbsp;&nbsp;</span>
                            Departure Date: {departure_date1} <span>&nbsp;&nbsp;</span>
                            Arrival Date: {arrival_date1} <span>&nbsp;&nbsp;</span>
                            To: {to1} <span>&nbsp;&nbsp;</span>
                            From: {from1}<span>&nbsp;&nbsp;</span>
                            Price: {price1}<span>&nbsp;&nbsp;</span>
                        </Card>

                        <Card
                            style={{ marginTop: 16 }}
                            type="inner"
                            title="Total Price"
                        >
                            ${calc()}
                        </Card>

                    </Card>
                </div></>
   
      <div>
  
      <StripeCheckout
              name="Marwa7a AirLine"
              image="https://source.unsplash.com/random/1267x720"
              billingAddress
              shippingAddress
              description={`Your total is $${calc(price,NumberofAdults,priceChildern,NumberofChildern,price1,NumberofAdults1,priceChildern1,NumberofChildern1)} but you will pay $${calc1()} Only`}
              amount={calc1()}
              token={onToken}
              stripeKey="pk_test_51K8DBTCKYHqJOSAf4Gpv0jbtNRbEyxc6yUgWRiT6ekqFfbeIpQdKB14iBAKoT4pGMHLpl77D30YpEDTFo77n18Of00wMxkCno7"
            >
              <Button>Confirm And Pay</Button>
            </StripeCheckout>
          
            </div>

 

</>
)
   }

export default ViewAllFlights;