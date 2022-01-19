
import {useState,useEffect} from "react";
import axios from 'axios';
import {useSelector,useStore} from 'react-redux';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const UpdateInfo =()=>{
  const[id,setid]=useState('');
  const[firstName,setfirstName]=useState('');
  const[lastName,setlastName]=useState('');
  const[userName,setuserName]=useState('');
  const[homeAddress,sethomeAddress]=useState('');
  const[countryCode,setcountryCode]=useState('');
  const[telephoneNumber,settelephoneNumber]=useState('');
  const[email,setemail]=useState('');
  const[passportNumber,setpassportNumber]=useState('');
  const[password,setpassword]=useState('');

  const {auth:{user},} =useSelector((state)=>({...state}));
  useEffect(()=>{
    loadAuser()
    },[])
    const headers1 = {
        
        Authorization:`${user._id}`
      }

const user1 = async ()=> await axios.get("http://localhost:8000/viewUser",{
    headers: headers1
    });

const loadAuser  = async ()=>{
let res = await user1();
setid(res.data.at(0)._id);
setfirstName(res.data.at(0).firstName);
setlastName(res.data.at(0).lastName);
setuserName(res.data.at(0).userName);
sethomeAddress(res.data.at(0).homeAddress);
setcountryCode(res.data.at(0).countryCode);
settelephoneNumber(res.data.at(0).telephoneNumber);
setemail(res.data.at(0).email);
setpassportNumber(res.data.at(0).passportNumber);
setpassword(res.data.at(0).password);
console.log(res.data.at(0).firstName);

};

const handleUpdate =()=>{ 
    if(!window.confirm("Are You Sure You Want to Update this flight")) return;
    
    const data = {
        firstName:firstName,
 lastName:lastName,
 userName:userName,
 homeAddress:homeAddress,
 countryCode:countryCode,
 telephoneNumber:telephoneNumber,
 email:email,
 passportNumber:passportNumber,
 password:password,
    }    
    axios.put(`http://localhost:8000/updateUserInfo/${id}`,data);
   
    toast("User Information updated"); 
}
const theme = createTheme();
    return(
        <>
          <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleUpdate} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                 
                  name="firstName"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(event)=>setfirstName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  value={lastName}
                  onChange={(event)=>setlastName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="User Name"
                  value={userName}
                  onChange={(event)=>setuserName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(event)=>setemail(event.target.value)}
                />
            </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
            </>
    )

}
export default UpdateInfo;