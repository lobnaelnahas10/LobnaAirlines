import React ,{useState} from 'react';
import {SearchOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";




const Search = ()=>{
    const[flight_number,setflight_number]=useState();
    const[departure_time,setdeparture_time]=useState();
    const[arrival_number,setarrival_number]=useState();
    const[departure_date,setdeparture_date]=useState();
    const[arrival_date,setarrival_date]=useState();
    const[to,setTo]=useState();
    const[from,setFrom]=useState();

    const navigate = useNavigate();
    

  const handleSubmit=()=>{
      navigate(`/search-result?flight_number=${flight_number}&departure_time=${departure_time}&arrival_number=${arrival_number}&departure_date=${departure_date}&arrival_date=${arrival_date}&to=${to}&from=${from}`);

  } ;
  return(
<div className="form">
      <div className="Card">
        <input placeholder="Flight Number"
        onChange={(event)=>setflight_number(event.target.value)} value={flight_number}
        style={{height:"50px", width:"200px"}}/>
         <input type="time"  
        onChange={(event)=>setdeparture_time(event.target.value)} value={departure_time}
        style={{height:"50px", width:"200px"}}/> 
        <input type="time" 
        onChange={(event)=>setarrival_number(event.target.value)} value={arrival_number}
        style={{height:"50px", width:"200px"}}/>  
       <input type="date" 
        onChange={(event)=>setdeparture_date(event.target.value)} value={departure_date}
        style={{height:"50px", width:"300px"}}/>
        <input type="date" 
        onChange={(event)=>setarrival_date(event.target.value)} value={arrival_date}
        style={{height:"50px", width:"300px"}}/>
        
        <input type="text" placeholder="TO"
        onChange={(event)=>setTo(event.target.value)} value={to}
        style={{height:"50px", width:"100px"}}/>
        
        <input type="text" placeholder="FROM"
        onChange={(event)=>setFrom(event.target.value)} value={from}
        style={{height:"50px", width:"100px"}}/>
      
        <SearchOutlined onClick={handleSubmit}/>
        </div>
</div>
  )
  
}
export default Search;