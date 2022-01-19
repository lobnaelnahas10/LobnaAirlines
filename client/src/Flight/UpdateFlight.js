import React from 'react';
import {useState} from "react";
import axios from 'axios';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import {Button} from 'antd';

const UpdateFlight =({match})=>{
    const [flight_number,setflight_number]=useState('')
    const [departure_time,setdeparture_time]=useState('')
    const [arrival_number,setarrival_number]=useState('')
    const [departure_date,setdeparture_date]=useState('')
    const [arrival_date,setarrival_date]=useState('')
    const [numberOfEcoSeats,setnumberOfEcoSeats]=useState('')
    const [numberOfBuisnessSeats,setnumberOfBuisnessSeats]=useState('')
    const [to,setTo]=useState('')
    const [from,setFrom]=useState('')
    
    const navigate = useNavigate();
    const handleBack=()=>{
        navigate("/AdminDashBoard");
      }
   
    const handleFlightUpdate =()=>{ 
        if(!window.confirm("Are You Sure You Want to Update this flight")) return;
        
        const data = {flight_number: flight_number,
            departure_time: departure_time, 
            arrival_number:arrival_number,
            departure_date:departure_date,
            arrival_date:arrival_date, 
            numberOfEcoSeats:numberOfEcoSeats,
       numberOfBuisnessSeats: numberOfBuisnessSeats,
            to:to,
            from:from
        }    
        axios.put(`http://localhost:8000/updateflight/${match.params.flightid}`,data);
        toast("Flight Updated"); 
    }
        
        return(
            <div className="container-fluid">
                <ToastContainer position="top-center" />
                <h2 className="mt-5 mb-5"> Update A Flight</h2>
              <form>
                  <div className="form-group">
                      <label className="text-muted">Flight Number </label>
                      <input  onChange={(event)=>setflight_number(event.target.value)} type="text" className="form-horizontal" value={flight_number}/>
                  </div>

                  <div className="form-group">
                      <label className="text-muted"> Departure Time </label>
                      <input onChange={(event)=>setdeparture_time(event.target.value)} type="time" className="form-horizontal" value={departure_time}/>
                  </div>

                  <div className="form-group">
                      <label className="text-muted">Arrival Time </label>
                      <input onChange={(event)=>setarrival_number(event.target.value)} type="time" className="form-horizontal" value={arrival_number}/>
                  </div>

                  <div className="form-group">
                      <label className="text-muted"> Departue Date </label>
                      <input onChange={(event)=>setdeparture_date(event.target.value)} type="date" className="form-horizontal" value={departure_date}/>
                  </div>

                  <div className="form-group">
                      <label className="text-muted">Arrival Date  </label>
                      <input onChange={(event)=>setarrival_date(event.target.value)} type="date" className="form-horizontal" value={arrival_date}/>
                  </div>
                  <div className="form-group">
                      <label className="text-muted"> Number of Economic Seats  </label>
                      <input onChange={(event)=>setnumberOfEcoSeats(event.target.value)} type="text" className="form-horizontal" value={numberOfEcoSeats}/>
                  </div>
                  <div className="form-group">
                      <label className="text-muted">Number of business Seats</label>
                      <input onChange={(event)=>setnumberOfBuisnessSeats(event.target.value)} type="text" className="form-horizontal" value={numberOfBuisnessSeats}/>
                  </div>
                  <div className="form-group">
                      <label className="text-muted">To</label>
                      <input onChange={(event)=>setTo(event.target.value)} type="text" className="form-horizontal" value={to}/>
                  </div>
                  <div className="form-group">
                      <label className="text-muted">From</label>
                      <input onChange={(event)=>setFrom(event.target.value)} type="text" className="form-horizontal" value={from}/>
                  </div>
    
                  <button  onClick={handleFlightUpdate} className="btn btn-raised btn-primary"> Update</button>
              </form>
              <Button variant="secondary" onClick={handleBack} style={{marginLeft:"85rem",marginRight:"2rem", width:"300px"}} size="lg">
    Back
  </Button>

            </div>
        ) 
    };
export default UpdateFlight;