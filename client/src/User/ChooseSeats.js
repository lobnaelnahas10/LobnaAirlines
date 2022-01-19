import axios from "axios";
import { useState,useEffect ,useRef} from "react";
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
 import Stripe from "react-stripe-checkout";
import { Modal } from 'antd';
import SvgIcon from '@mui/material/SvgIcon';
import SeatIcon from '@mui/material/SvgIcon';
import StripeCheckout from "react-stripe-checkout";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import Button from '@mui/material/Button';
 import FeedIcon from '@mui/icons-material/Feed';
const { TabPane } = Tabs;
const { Step } = Steps;

const ChooseSeats=()=>{
  const {auth:{user}} =useSelector((state)=>({...state}));
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
    const [visible, setVisible] = useState(false);
  
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
    const onToken = async (token) => {   
      const res = await axios.post("http://localhost:8000/payment",{token, amount: 5300*100},{headers:headers2});
                            if(res.status==200){
                              Confirm();
                            }
    };
    const firstFlight=async (id)=>{

        let res = await axios.get(`http://localhost:8000/viewFlight/${id}`);
        setid(id);
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
        console.log(flight_number);
    }
    const secondFlight=async (id1)=>{
        let res2 = await axios.get(`http://localhost:8000/viewFlight/${id1}`);
       setid1(id1);
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
       console.log(flight_number1);
       toast("You Selected the Return Flight with FlightNumber="+res2.data.flight_number+"  "+"Now choose the Seats for the selected Departure Flight");
         
    }
    const headers2 = {
        
      Authorization:`${user.email}`
    }
      

    const headers = {
      'Content-Type': 'application/json',
      
    }
    const sendReservation=async()=>{
      var p=price*NumberofAdults+priceChildern*NumberofChildern+price1*NumberofAdults1+priceChildern1*NumberofChildern1;
      var s=a.join();
      var s1=b.join();
       let user1=user._id;
       var bookingNumber=new Date().valueOf();
       axios.post(`http://localhost:8000/createReservation/`,({departure:id,return:id1,user:user1,price:p,cabin:cabin,bookingNumber:bookingNumber,depSeats:s,retSeats:s1,NumberofChildren:NumberofChildern,NumberofAdults:NumberofAdults}),{headers:headers});
       toast("Flight Reserved ");
    }
    const ConfirmSecFlight=async()=>{
      console.log("B="+b);
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

    useEffect(()=>{
        const {id,id1,cabin,NumberofAdults,NumberofChildern}=queryString.parse(window.location.search);
        setCabin(cabin);
        setNumberofAdults(NumberofAdults);
        setNumberofchildern(NumberofChildern);
        setNumberofAdults1(NumberofAdults);
        setNumberofchildern1(NumberofChildern);
         firstFlight(id);
         secondFlight(id1);
       
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
                    const calc=(price,NumberofAdults,priceChildern,NumberofChildern,price1,NumberofAdults1,priceChildern1,NumberofChildern1)=>{
    
                        return price*NumberofAdults+priceChildern*NumberofChildern+price1*NumberofAdults1+priceChildern1*NumberofChildern1;
                      }
                  
                      
return(
    <div className="container">
      <div>
      <Steps current={1}>
    <Step title="Finished" description="Please Choose a Departure Flight" />
    <Step title="Finished"  description="Please Choose a Return Flight." />
    <Step title="In Progress" description="Please Choose Seats and Pay" />
  </Steps>
  </div>
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
    {flight_number!="" && flight_number1!==""&&(
<>
      { getCabin()==='Economy'&&(
        <>
      {(loop(numberOfEcoSeats)).map(c => ( 
        <>
        { OCC(SeatsOccEco,c)==null && (
        <Button value={c} key={c}  onClick={()=>handleInput(c)} data-bs-toggle="button"variant="secondary lg" >E{c}   </Button>
      
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
{flight_number=="" && flight_number1==""&&(
<>
<p> Select first Departure and arrival Flights That You Want</p>
</>
)}
    </TabPane>
  </Tabs>

</div>
<>
      <Button type="primary" onClick={() => setVisible(true)}>
        View Summary
      </Button>
      <Modal
        title="Flights Summary"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
          <h1> Departure Flight</h1>
          Flight Number: {flight_number}  <span>&nbsp;&nbsp;</span>
        Departure Time: {departure_time}  <span>&nbsp;&nbsp;</span>
        Arrival Time: {arrival_number} <span>&nbsp;&nbsp;</span>
        Departure Date: {departure_date} <span>&nbsp;&nbsp;</span>
        Arrival Date: {arrival_date} <span>&nbsp;&nbsp;</span>
        To: {to} <span>&nbsp;&nbsp;</span>
        From: {from}<span>&nbsp;&nbsp;</span>
        Price: {price}

        <h1>Return Flight</h1>
        Flight Number: {flight_number1}  <span>&nbsp;&nbsp;</span>
        Departure Time: {departure_time1}  <span>&nbsp;&nbsp;</span>
        Arrival Time: {arrival_number1} <span>&nbsp;&nbsp;</span>
        Departure Date: {departure_date1} <span>&nbsp;&nbsp;</span>
        Arrival Date: {arrival_date1} <span>&nbsp;&nbsp;</span>
        To: {to1} <span>&nbsp;&nbsp;</span>
        From: {from1}<span>&nbsp;&nbsp;</span>
        Price: {price1}<span>&nbsp;&nbsp;</span>
        <h1>Total Trip Price</h1>
        ${calc(price,NumberofAdults,priceChildern,NumberofChildern,price1,NumberofAdults1,priceChildern1,NumberofChildern1)}
      </Modal>
    </>
    
      <div>
     
      <StripeCheckout
              name="Ecommerce Shop"
              image="https://source.unsplash.com/random/1267x720"
              billingAddress
              shippingAddress
              description={`Your total is $${calc(price,NumberofAdults,priceChildern,NumberofChildern,price1,NumberofAdults1,priceChildern1,NumberofChildern1)}`}
              amount={calc(price,NumberofAdults,priceChildern,NumberofChildern,price1,NumberofAdults1,priceChildern1,NumberofChildern1)*100}
              token={onToken}
              stripeKey="pk_test_51K8DBTCKYHqJOSAf4Gpv0jbtNRbEyxc6yUgWRiT6ekqFfbeIpQdKB14iBAKoT4pGMHLpl77D30YpEDTFo77n18Of00wMxkCno7"
            >
              <Button>Pay And Confirm</Button>
            </StripeCheckout>
           
            </div>
</div>
)

}
export default ChooseSeats;