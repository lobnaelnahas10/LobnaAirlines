import axios from "axios";
import { useState,useEffect } from "react";
import queryString from 'query-string';
import {ArrowRightOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Tabs } from 'antd';
import { Card ,Button} from 'antd';
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Steps, Popover } from 'antd';
import { set } from "mongoose";
import { ToastContainer,toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';
 import { useNavigate } from "react-router-dom";
const { TabPane } = Tabs;
const { Step } = Steps;
const ViewAllFlights =()=>{
  const calc=(price,NumberofAdults,priceChildern,NumberofChildern,price1,NumberofAdults1,priceChildern1,NumberofChildern1)=>{
    
    return price*NumberofAdults+priceChildern*NumberofChildern+price1*NumberofAdults1+priceChildern1*NumberofChildern1;
  }
const[flightsid,setflightsid]=useState([]);
const [show1, setShow1] = useState(true);
const [showConfirm, setShowConirm] = useState(false);
const[flights,setFlights]=useState([]);
const[flights2,setFlights2]=useState([]);





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
const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const sendReservation=async()=>{
  var p=price*NumberofAdults+priceChildern*NumberofChildern+price1*NumberofAdults1+priceChildern1*NumberofChildern1;
  var s=a.join();
  var s1=b.join();
  let flights12=[];
  flights12.push(id);
  flights12.push(id1);
  setflightsid(flights12);
  console.log(flights12)
   let user1=user._id;
   var bookingNumber=new Date().valueOf();
   axios.post(`http://localhost:8000/createReservation/`,({departure:id,return:id1,user:user1,price:p,cabin:cabin,bookingNumber:bookingNumber,depSeats:s,retSeats:s1}),{headers:headers});
   setShowConirm(true);
}
const ConfirmSecFlight=async()=>{
  console.log("B="+b.length);
  for(var j=0;j<b.length;j++){ 
    var position= parseInt(b.at(j));
     if( cabin=='Economy'){
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
    if(cabin==='Economy'){
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
  var x=parseInt(NumberofAdults);
  var y=parseInt(NumberofChildern);
  console.log(x+y);
 if(b.length<x+y && !b.includes(e)){
  b.push(e);
  toast(" Return Flight Seats Selected "+b);
 }
 else if(b.includes(e)){
   y=b.indexOf(e);
   b.splice(y,1)
   toast("You Removed Seat"+e+" Return Flight Seats Selected ="+b);
 }
 
 console.log(b);
  } 

const handleInput=(e)=>{
    var x=parseInt(NumberofAdults1);
    var y=parseInt(NumberofChildern1);
    console.log(x+y);
   if(a.length<x+y && !a.includes(e)){
    a.push(e);
    toast(" Departure Flight Seats Selected "+a);
   }
   else if(a.includes(e)){
     y=a.indexOf(e);
     a.splice(y,1)
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
  return cabin;
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
    useEffect(()=>{
    const {departure_time,arrival_number,departure_date,arrival_date,to,from,to1,from1,NumberofChildern,NumberofAdults,cabin}=queryString.parse(window.location.search);
      setNumberofchildern(NumberofChildern);
      setNumberofAdults(NumberofAdults);
      setNumberofchildern1(NumberofChildern);
      setNumberofAdults1(NumberofAdults);
      setCabin(cabin);
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
    
return(
    <>
    <div className="container-fluid p-5">
      {showConfirm==true &&(
    <div className="alert alert-primary" >
       Reservation Confirmed
      </div>
      )}
    <ToastContainer position="top-center" />
    <div className="container-fluid p-5 text-center"> 
    <h1> Departure Flights
        </h1>
    </div>


    <div className="Card" >
   {flights.map((f)=><div className="card border border-dark mb-3"   style={{width:"100rem",height:"25rem"}} key={f.id} f={f}  >
<Tabs  type="card" centered>
    <TabPane tab="Flight" key="1">
   <h1>   From: {f.from} <ArrowRightOutlined />  
      <span>&nbsp;&nbsp;</span>
      To: {f.to}
      </h1>
      <Button  variant="secondary lg"  onClick={()=>handleSubmit(f._id)}> SELECT</Button>
    </TabPane>
    <TabPane tab="Flight Details" key="2">
     <p>Flight Number: {f.flight_number}</p>
     <p> Departure Time: {f.departure_time} </p>
     <p> Arrival Time: {f.arrival_number}</p>
     <p>  Departure Date: {f.departure_date}</p>
     <p> Arrival Date: {f.arrival_date}</p>
     <p>  To: {f.to} </p>
     <p>  From: {f.from}</p>
     <p>  Price: {f.price}</p>
     <p>  Baggage Allowance: {f.baggage}</p>
    </TabPane>

    <TabPane tab="Choose Seats" key="3" >
    {flight_number!="" && flight_number1!==""&&(
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
)}
{flight_number=="" && flight_number1==""&&(
<>
<p> Select first Departure and arrival Flights That You Want</p>
</>
)}
    </TabPane>
  </Tabs>
</div>)}
    </div>
    <div className="container-fluid p-5 text-center"> 
    <h1> Return Flights
        </h1>
    </div>
    <div className="row" >
      {flights2.map((f1)=><div className="card border border-dark mb-3"   style={{width:"100rem",height:"25rem"}} key={f1.id} f1={f1}  >
<Tabs  type="row" centered>
    <TabPane tab="Flight" key="1">
   <p>   From: {f1.from} <ArrowRightOutlined />  
      <span>&nbsp;&nbsp;</span>
      To: {f1.to}
      </p>
      <Button  variant="secondary lg" onClick={()=>handleSubmit2(f1._id)}> SELECT</Button>
    </TabPane>
    <TabPane tab="Flight Details" key="2">
     <p>Flight Number: {f1.flight_number}</p>
     <p> Departure Time: {f1.departure_time} </p>
     <p> Arrival Time: {f1.arrival_number}</p>
     <p>  Departure Date: {f1.departure_date}</p>
     <p> Arrival Date: {f1.arrival_date}</p>
     <p>  To: {f1.to} </p>
     <p>  From: {f1.from}</p>
     <p>  Price: {f1.price}</p>
     <p>  Baggage Allowance: {f1.baggage}</p>
    </TabPane>
    <TabPane tab="Choose Seats"  key="3">
      {flight_number!="" && flight_number1!==""&&(
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
)}
{flight_number=="" && flight_number1==""&&(
<>
<p> Select first Departure and arrival Flights That You Want</p>
</>
)}
    </TabPane>
  </Tabs>
</div>)}
    </div>
    </div>
    
    <div>
<h1 centered> Reservation Summary </h1>
    </div>
    {flight_number!="" && flight_number1!=""&& {show1} &&(
    <div className="container">
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
      {calc(price,NumberofAdults,priceChildern,NumberofChildern,price1,NumberofAdults1,priceChildern1,NumberofChildern1)}
    </Card>
    {auth!=null && (
      <>
<div className="container-fluid "centered>
<Button variant="primary"  onClick={Confirm} style={{marginLeft:"2rem",marginRight:"85rem", width:"300px"}} centered size="lg">Confirm
  </Button>
  </div>
  </>
  )}
  </Card>
    </div>
    )}
      {auth!=null && (
      <>
<div className="container-fluid "centered>
<div>
  <Button variant="secondary" onClick={handleBack} style={{marginLeft:"85rem",marginRight:"2rem", width:"300px"}} size="lg">
    Back
  </Button>
  </div>
</div>

</>
    )}
     {auth==null && (
      <>
    <a className="nav-item">
<Link to="/signin">
<Button >Sign In to Confirm</Button>
</Link>
</a>
</>
    )}
</>
)
   }

export default ViewAllFlights;