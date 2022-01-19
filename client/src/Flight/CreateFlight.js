import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
 import { CgAirplane } from "react-icons/cg";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Airport from "../component/Airport.json"
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../index.css"
const CreateFlight =()=>{
    const theme = createTheme();
    const [flight_number,setflight_number]=useState('');
    const [departure_time,setdeparture_time]=useState('');
    const [arrival_number,setarrival_number]=useState('');
    const [departure_date,setdeparture_date]=useState('');
    const [arrival_date,setarrival_date]=useState('');
    const [numberOfEcoSeats,setnumberOfEcoSeats]=useState('');
    const [numberOfBuisnessSeats,setnumberOfBuisnessSeats]=useState('');
    const [to,setTo]=useState('');
    const [from,setFrom]=useState('');
    const [price,setPrice]=useState('');
    const [priceChildern,setPriceChildren]=useState('');
    const [baggage,setBaggage]=useState('');
    
    const navigate = useNavigate();
    const handleBack=()=>{
        navigate("/AdminDashBoard");
      }
   const  clickSubmit= async function(event){
       event.preventDefault(event);
       await axios.post("http://localhost:8000/createflight",JSON.stringify({flight_number: flight_number,
       departure_time: departure_time, 
       arrival_number:arrival_number,
       departure_date:departure_date,
       arrival_date:arrival_date, 
       numberOfEcoSeats:numberOfEcoSeats,
       numberOfBuisnessSeats: numberOfBuisnessSeats,
       to:to,
       from:from,
       price:price,
       priceChildern:priceChildern,
       baggage:baggage,
      
   }),{headers:{"Content-Type":"application/json"}}

        )
        toast("Flight Created ");  
  
    };
        
        return(
            <ThemeProvider theme={theme}>
                <ToastContainer position="top-center" />
            <Container component="main" maxWidth="xs">
                <CgAirplane size="medium"/>
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography component="h1" variant="h5">
                  Create A Flight
                </Typography>
                <Box component="form" onSubmit={clickSubmit}  noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="flight_number"
                    value={flight_number}
                    onChange={(event)=>setflight_number(event.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="time"
                    label="departure_time"
                    value={departure_time}
                    onChange={(event)=>setdeparture_time(event.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="arrival_number"
                    type="time"
                    value={arrival_number}
                    onChange={(event)=>setarrival_number(event.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="departure_date"
                    value={departure_date}
                    type="date"
                    onChange={(event)=>setdeparture_date(event.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="arrival_date"
                    type="date"
                    value={arrival_date}
                    onChange={(event)=>setarrival_date(event.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="numberOfEcoSeats"
                    value={numberOfEcoSeats}
                    onChange={(event)=>setnumberOfEcoSeats(event.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="numberOfBuisnessSeats"
                    value={numberOfBuisnessSeats}
                    onChange={(event)=>setnumberOfBuisnessSeats(event.target.value)}
                  />
                   <select className="select border" onChange={(event)=>setFrom(event.target.value)} >
                   <option disabled="true" selected>Flying From  </option>
{ Airport.Airport.map((result)=>(<option value={result.code}>{result.country}, {result.code} </option>))}
  </select>
                   <select className="select border" onChange={(event)=>setTo(event.target.value)} >
                   <option disabled="true" selected>Flying To  </option>
{ Airport.Airport.map((result)=>(<option value={result.code}>{result.country}, {result.code} </option>))}
  </select>

                
                   <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="price"
                    value={price}
                    onChange={(event)=>setPrice(event.target.value)}
                  />
                   <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="priceChildern"
                    value={priceChildern}
                    onChange={(event)=>setPriceChildren(event.target.value)}
                  />
                   <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="baggage"
                    value={baggage}
                    onChange={(event)=>setBaggage(event.target.value)}
                  />

                 
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Create
                  </Button>
                </Box>
              </Box>
               
            </Container>
          </ThemeProvider>
        ) 
    
    };




export default CreateFlight;