import axios from "axios";
import '../index.css'
import { useState,useEffect } from "react";
import queryString, { parse } from 'query-string';
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
 import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
 import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
 import Button from '@mui/material/Button';
 import FeedIcon from '@mui/icons-material/Feed';
const UpdateDepDiffCabin=()=>{
    const {auth:{user}} =useSelector((state)=>({...state}));
    const[id,setId]=useState('');
    const [flight1,setflight1]=useState('');
    const [flight2,setflight2]=useState('');
    const [cabin1,setCabin1]=useState('');
    const [depSeats,setdepSeats]=useState('');
    const [retSeats,setretSeats]=useState('');
    const [pricefinal,setpricefinal]=useState('');
    const [bookingNumber,setBNumber]=useState('');
    var a=[];
    var b=[];
    const [cabin,setCabin]=useState('');
    const { TabPane } = Tabs;
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
    const [SeatsOccBus,setSeatsOccBus]=useState([]); 
    const [SeatsOccEco,setSeatsOccEco]=useState([]); 

    const [id2,setid2]=useState('');
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
    useEffect(async()=>{
        const {id,cabin}=queryString.parse(window.location.search);
      setId(id);
      const res= await axios.get(`http://localhost:8000/viewReservation/${id}`)
      console.log(res.data)
      setBNumber(res.data.bookingNumber)
      setdepSeats(res.data.depSeats)
      if(cabin=='Economy'){
          setCabin('Business');
      }
      else{
          setCabin('Economy');
      }
      setCabin1(cabin);
      setretSeats(res.data.retSeats)
      setflight1(res.data.departure)
      setflight2(res.data.return)
      setpricefinal(res.data.price)
     console.log(depSeats);
     let res2 = await axios.get(`http://localhost:8000/viewFlight/${res.data.departure}`)
     setid1(res2.data._id);
     setflight_number(res2.data.flight_number);
        setdeparture_time(res2.data.departure_time);
        setarrival_number(res2.data.arrival_number);
        setdeparture_date(res2.data.departure_date);
        setarrival_date(res2.data.arrival_date);
        setTo(res2.data.to);
        setFrom(res2.data.from);
        setPrice(res2.data.price);
        setPriceChildern(res2.data.priceChildern);
        setBaggage(res2.data.baggage);
        setnumberOfEcoSeats(res2.data.numberOfEcoSeats);
        setnumberOfBuisnessSeats(res2.data.numberOfBuisnessSeats);
        setSeatsOccBus(res2.data.SeatsOccBus);
        setSeatsOccEco(res2.data.SeatsOccEco);

        let res3 = await axios.get(`http://localhost:8000/viewFlight/${res.data.return}`)
        setid2(res3.data._id);
        setflight_number1(res3.data.flight_number);
           setdeparture_time1(res3.data.departure_time);
           setarrival_number1(res3.data.arrival_number);
           setdeparture_date1(res3.data.departure_date);
           setarrival_date1(res3.data.arrival_date);
           setTo1(res3.data.to);
           setFrom1(res3.data.from);
           setPrice1(res3.data.price);
           setPriceChildern1(res3.data.priceChildern);
           setBaggage1(res3.data.baggage);
           setnumberOfEcoSeats1(res3.data.numberOfEcoSeats);
           setnumberOfBuisnessSeats1(res3.data.numberOfBuisnessSeats);
           setSeatsOccBus1(res3.data.SeatsOccBus);
           setSeatsOccEco1(res3.data.SeatsOccEco);
        
     console.log(res3.data.flight_number);
       
        },[window.location.search])    
    
        const loop=(id)=>{
            let x;
            let x1=[];
           for(var i=0;i<id;i++){
           x= i;
            x1.push(x)
           }
           return x1;
          }
          const OCC=(array,c)=>{

            return array[c];
            }
            const getCabin=()=>{
              return cabin;
            }
            const handleInput=(e)=>{
                let d =depSeats.split(",");
                var x=d.length;

                console.log(depSeats);
               if(a.length<x && !a.includes(e)){
                a.push(e);
                toast(" Departure Flight Seats Selected "+a);
               }
               else if(a.includes(e)){
                var y=a.indexOf(e);
                 a.splice(y,1)
                  toast("You Removed Seat"+e+" Departure Flight Seats Selected ="+a);
               }
               console.log(a);
                } 
                const handleInput1=(e)=>{
                    let d =retSeats.split(",");
                    var x=d.length;
                   if(b.length<x && !b.includes(e)){
                    b.push(e);
                    toast(" Return Flight Seats Selected "+b);
                   }
                   else if(b.includes(e)){
                     var y=b.indexOf(e);
                     b.splice(y,1)
                     toast("You Removed Seat"+e+" Return Flight Seats Selected ="+b);
                   }
                   
                   console.log(b);
                    } 
             const handleUpdate =async()=>{
                let a1=depSeats.split(",");
                console.log(a1);
               for(var i=0;i<a1.length;i++){ 
                 var position= parseInt(a1.at(i));
                  if(cabin1==='Economy'){
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
              await axios.put(`http://localhost:8000/updateflight/${id1}`,data);
              handleUpdate1();
             }
             const handleUpdate1 =async()=>{
                let a1=retSeats.split(",");
                console.log(a1);
               for(var i=0;i<a1.length;i++){ 
                 var position= parseInt(a1.at(i));
                  if(cabin1==='Economy'){
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
              await axios.put(`http://localhost:8000/updateflight/${id2}`,data);
              updateNext();
             }
             const headers = {
                'Content-Type': 'application/json',
                
              }
             const updateNext=async()=>{
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
                 await axios.put(`http://localhost:8000/updateflight/${id1}`,data);
                 updateNext1();
             }
             const updateNext1=async()=>{
                for(var i=0;i<b.length;i++){ 
                    var position= parseInt(b.at(i));
                     if(cabin==='Economy'){
                      setSeatsOccEco1(SeatsOccEco1.splice(position,1,true))
                   }
                   else {
                      setSeatsOccBus1(SeatsOccBus1.splice(position,1,true))
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
                 await axios.put(`http://localhost:8000/updateflight/${id2}`,data);
                 updateReservation();
             }
             const updateReservation=async()=>{
                var s=a.join();
                var s1=b.join();
                console.log("s"+s);
                 let user1=user._id;
                 console.log("a"+a)
                 axios.put(`http://localhost:8000/updateReservation/${id}`,({departure:flight1,return:flight2,user:user1,price:pricefinal,cabin:cabin,bookingNumber:bookingNumber,depSeats:s,retSeats:s1}),{headers:headers});
             }
              
    return(
<div className="container">
<ToastContainer position="top-center" />
<div className="Card" >
<Tabs defaultActiveKey="1" centered >
<TabPane tab={
        <span>
          <AirplaneTicketIcon fontSize="large"/>  
         
        </span>
      } key="1">
   <h1 className="h1" >   From: {from} <FlightTakeoffOutlinedIcon fontSize="large" />  
      <span>&nbsp;&nbsp;</span>
      To: {to}
      </h1>
      
    </TabPane>
    <TabPane tab={
        <span>
          <FeedIcon fontSize="large"/>  
          Details
        </span>} key="2">
     <h5  className="h6">  <span>&nbsp;&nbsp;</span> Flight Number: {flight_number}</h5>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  Departure Time: {departure_time} </h6>
     <h6 className="h6"><span>&nbsp;&nbsp;</span>  Arrival Time: {arrival_number}</h6>
     <h6 className="h6">  <span>&nbsp;&nbsp;</span>  Departure Date: {departure_date}</h6>
     <h6 className="h6"><span>&nbsp;&nbsp;</span>  Arrival Date: {arrival_date}</h6>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  To: {to} </h6>
     <h6 className="h6">  <span>&nbsp;&nbsp;</span> From: {from}</h6>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  Price: {price}</h6>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  Baggage Allowance: {baggage}</h6>
    </TabPane>
    <TabPane tab="Choose Seats" key="3">
<>
      { getCabin()==='Economy'&&(
        <>
      {(loop(numberOfEcoSeats)).map(c => ( 
        <>
        { OCC(SeatsOccEco,c)==null && (
        <Button value={c} key={c.id}   onClick={()=>handleInput(c)} data-bs-toggle="button"variant="secondary lg" >E{c}   </Button>
      
        )
        }
        </>
      ))}
      </>
      )}
 { getCabin()==='Business'&&(
      <>
    {(loop(numberOfBuisnessSeats)).map(c => ( 
      <>
      { OCC(SeatsOccBus,c)==null && (
      <Button value={c} key={c.id}  onClick={()=>handleInput(c)} data-bs-toggle="button"variant="secondary lg" >B{c} </Button>
      )
      }
      </>
    ))}
    </>
    )}
        </>
    </TabPane>
  </Tabs>
  

</div>
<hr/>
<div className="Card" >
<Tabs defaultActiveKey="1" centered>
<TabPane tab={
        <span>
          <AirplaneTicketIcon fontSize="large"/>  
         
        </span>
      } key="1">
   <h1 className="h1" >   From: {from1} <FlightTakeoffOutlinedIcon fontSize="large" />  
      <span>&nbsp;&nbsp;</span>
      To: {to1}
      </h1>
      
    </TabPane>
    <TabPane tab={
        <span>
          <FeedIcon fontSize="large"/>  
          Details
        </span>} key="2">
     <h5  className="h6">  <span>&nbsp;&nbsp;</span> Flight Number: {flight_number1}</h5>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  Departure Time: {departure_time1} </h6>
     <h6 className="h6"><span>&nbsp;&nbsp;</span>  Arrival Time: {arrival_number1}</h6>
     <h6 className="h6">  <span>&nbsp;&nbsp;</span>  Departure Date: {departure_date1}</h6>
     <h6 className="h6"><span>&nbsp;&nbsp;</span>  Arrival Date: {arrival_date1}</h6>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  To: {to1} </h6>
     <h6 className="h6">  <span>&nbsp;&nbsp;</span> From: {from1}</h6>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  Price: {price1}</h6>
     <h6 className="h6"> <span>&nbsp;&nbsp;</span>  Baggage Allowance: {baggage1}</h6>
    </TabPane>
    <TabPane tab="Choose Seats" key="3">
    {flight_number!="" && flight_number1!==""&&(
<>
      { getCabin()==='Economy'&&(
        <>
      {(loop(numberOfEcoSeats1)).map(c => ( 
        <>
        { OCC(SeatsOccEco1,c)==null && (
        <Button value={c} key={c}  onClick={()=>handleInput1(c)} data-bs-toggle="button"variant="secondary lg" >E{c} </Button>
        )
        }
        </>
      ))}
      </>
      )}
 { getCabin()==='Business'&&(
      <>
    {(loop(numberOfBuisnessSeats1)).map(c => ( 
      <>
      {OCC(SeatsOccBus1,c)==null && (
      <Button value={c} key={c}  onClick={()=>handleInput1(c)} data-bs-toggle="button"variant="secondary lg" >B{c} </Button>
      )
      }
      </>
    ))}
    </>
    )}
        </>
)}
    </TabPane>
  </Tabs>

</div>

<button onClick={handleUpdate}> Update Seats</button>

</div>
    )
}

export default UpdateDepDiffCabin;