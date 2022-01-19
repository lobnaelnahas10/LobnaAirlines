import axios from "axios";
import '../index.css'
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
 import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import Button from '@mui/material/Button';
import FeedIcon from '@mui/icons-material/Feed';
const { Step } = Steps;
 const { TabPane } = Tabs;
const ChooseRetFlight =()=>{
    const [id,setid]=useState('');
    const [id1,setid1]=useState('');
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
    const[flights2,setFlights2]=useState([]);
    const[cabin,setCabin]=useState('');
    const {auth} =useSelector((state)=>({...state}));

    const AllFlights2 = async (query)=> await axios.post("http://localhost:8000/searchReturnresults",query);
    const navigate = useNavigate();
const handleNext=()=>{
    navigate(`/flightSeat?id=${id}&id1=${id1}&cabin=${cabin}&NumberofAdults=${NumberofAdults}&NumberofChildern=${NumberofChildern}`);
   
}

    useEffect(()=>{
        const {id,departure_time,arrival_number,departure_date,arrival_date,to,from,to1,from1,NumberofChildern,NumberofAdults,cabin}=queryString.parse(window.location.search);
        setid(id);
          setNumberofchildern(NumberofChildern);
          setNumberofAdults(NumberofAdults);
          setCabin(cabin);
            AllFlights2({departure_time,arrival_number,departure_date,arrival_date,to1,from1})
            .then(res=>{
                    setFlights2(res.data);
                    console.log(flights2);
                })
   
        },[window.location.search])
        const handleSubmit=async (id)=>{
            let res = await axios.get(`http://localhost:8000/viewFlight/${id}`);
            setid1(res.data._id);
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
            
           toast("You Selected the Return Flight with FlightNumber="+res.data.flight_number+"  "+"Proceed to Choose Your Seats");
        }
        const handleSignin= ()=>{
            navigate(`/signin`)
        }
    return(
<div className="container-fluid p-5">
<div>
<Steps current={0}>
    <Step title="Finished" description="Please Choose a Departure Flight" />
    <Step title="Waiting"  description="Please Choose a Return Flight." />
    <Step title="Waiting" description="Please Choose Seats and Pay." />
  </Steps>
  </div>
<ToastContainer position="top-center" />
{auth==null &&(
<Alert severity="info"  action={
    <Button onClick={handleSignin} color="inherit" size="large">
     Sign In
    </Button>
  } >
        <AlertTitle>Info</AlertTitle>
        You Need to Sign In to  — <strong>Proceed!</strong>
   
      </Alert>
)}
<div className="container-fluid p-5 text-center"> 
<div className="container-fluid p-5 text-center"> 
    <h1 className="h1"> Return Flights
        </h1>
        <h2 className="h2"> {flights2.length}  Available</h2>
    </div>
    </div>
<div className="Card" >
   {flights2.map((f)=><div className="card border border-dark mb-3"   style={{width:"100rem",height:"25rem"}} key={f.id} f={f}  >
<Tabs  type="card" centered>
<TabPane tab={
        <span>
          <AirplaneTicketIcon fontSize="large"/>  

        </span>
      } key="1">
   <h1 className="h1"  >   From: {f.from} <FlightTakeoffOutlinedIcon fontSize="large" />  
      <span>&nbsp;&nbsp;</span>
      To: {f.to}
      </h1>
      <Button  variant="secondary lg"  onClick={()=>handleSubmit(f._id)}> SELECT</Button>
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
  </Tabs>
</div>)}
{auth!==null &&(
    <Button variant="outlined"  size="large" onClick={handleNext}>Next</Button>
)}
    </div>

</div>

    )
}
export default ChooseRetFlight;