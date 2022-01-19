import React ,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import Airport from './Airport.json';
import "../index.css";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'antd/dist/antd.css';
import "../index.css"
import { Tabs } from 'antd';
import { BackTop } from 'antd';
const SearchHome =()=>{
  const { TabPane } = Tabs;
    const[departure_time,setdeparture_time]=useState();
    const[arrival_number,setarrival_number]=useState();
    const[departure_date,setdeparture_date]=useState();
    const[arrival_date,setarrival_date]=useState();
    const[to,setTo]=useState();
    const[from,setFrom]=useState();
    const[NumberofAdults,setNumberofAdults]=useState();
    const[Numberofchildern,setNumberofchildern]=useState();
    const[cabin,setcabin]=useState();
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
  
    
    const navigate = useNavigate();
    const handleSubmit=()=>{
      navigate(`/depFlights?&departure_time=${departure_time}&arrival_number=${arrival_number}&departure_date=${departure_date}&arrival_date=${arrival_date}&to=${to}&from=${from}&to1=${from}&from1=${to}&cabin=${cabin}&NumberofAdults=${NumberofAdults}&NumberofChildern=${Numberofchildern}`);
    } ;
    return(

<div className='=container-fluid'  style={{ marginLeft:'7rem'} }>
<Grid className='grid'  container spacing={3} columns={16}>

  <Grid  item xs={3}>
    
  <select className="select border"  onChange={(event)=>setFrom(event.target.value)} >
                   <option disabled="true" selected>Flying From  </option>
{ Airport.Airport.map((result)=>(<option value={result.code}>{result.country}, {result.code} </option>))}
  </select>
  </Grid>

  <Grid item xs={3}>
  <select className="select border"  onChange={(event)=>setTo(event.target.value)} >
                   <option disabled="true" selected>Flying To  </option>
{ Airport.Airport.map((result)=>(<option value={result.code}>{result.country}, {result.code} </option>))}
  </select>

    
  </Grid>

  <Grid item xs={3}>
    
    <input type="date" className="fo border" id="exampleDatepicker1" onChange={(event) => setdeparture_date(event.target.value)} value={departure_date}
              style={{ height: "50px", width: "265px" }} />
<label for="fo" className="form-label">Departure Date</label>
    
  </Grid>

  <Grid item xs={3}>
    
    <input   centered type="date" className="fo border" id="exampleDatepicker1" onChange={(event) => setarrival_date(event.target.value)} value={arrival_date}
              style={{ height: "50px", width: "250px" }} />
              <label for="fo" className="form-label">Arrival date</label>
    
  </Grid>


  <Grid item xs={3}>
    
    <input type="time" className="form-control"  className="border"
                id="exampletimepicker1" onChange={(event) => setdeparture_time(event.target.value)}
                value={departure_time}
                style={{ height: "50px", width: "250px" }} />

<label for="exampletimepicker1" className="form-label">Departure Time</label>
    
  </Grid>

  <Grid item xs={3}>
    

    <input type="time"  className=" fo border"className="form-control" id="exampletimepicker1" onChange={(event) => setarrival_number(event.target.value)} value={arrival_number}
                style={{ height: "50px", width: "250px" }} />

<label for="exampletimepicker1" className="form-label">Arrival Time</label>
    
  </Grid>

  <Grid item xs={3}>
  <select className="select border"    onChange={(event) => setcabin(event.target.value)}   id="cabin"  style={{ height: "50px", width: "250px" }} >
    <option default disabled="true" selected>---Choose Cabin Class---</option>
    <option value="Economy">Economy</option>
    <option value="Business">Business</option>
    </select>
            <label for="cabin" className="form-label">choose Cabin</label>   
  </Grid>
  <Grid item xs={3}>
    
    <input type="Number" className="border" id="cabin" min="1" onChange={(event) => setNumberofAdults(event.target.value)} value={NumberofAdults}
     style={{ height: "50px", width: "250px" }} />
     <label for="cabin" className="form-label">Number of Adults</label>
    
  </Grid>
  
  <Grid className='row' item xs={3}>
    
   
    <input type="Number"  className="border" id="cabin" min="0" default="0" onChange={(event) => setNumberofchildern(event.target.value)} value={Numberofchildern}
      style={{ height: "50px", width: "100px" }} />
    <label for="cabin" className="form-label">Number of Children</label>
    
  </Grid>
  <Grid  item xs={3}>
    
   
  <button onClick={handleSubmit}> Search  </button>
    
  </Grid>
</Grid>
</div>

    )
}

  
   
  

export default SearchHome;