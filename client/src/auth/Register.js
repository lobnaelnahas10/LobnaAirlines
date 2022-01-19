import {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
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
const Register=()=>{
    const [firstName,setfirstname]=useState('')
    const [lastName,setlastName]=useState('')
    const [userName,setuserName]=useState('')
    const [homeAddress,sethomeAddress]=useState('')
    const [countryCode,setcountryCode]=useState('')
    const [telephoneNumber,settelephoneNumber]=useState('')
    const [email,setemail]=useState('')
    const [passportNumber,setpassportNumber]=useState('')
    const [password,setpassword]=useState('')
    const navigate = useNavigate();
  
    const theme = createTheme();
   const  clickSubmit= async function(event){
       event.preventDefault(event);
       await axios.post("http://localhost:8000/signup",JSON.stringify({firstName: firstName,
       lastName: lastName, 
       userName:userName,
       homeAddress:homeAddress,
       countryCode:countryCode, 
       telephoneNumber:telephoneNumber,
       email: email,
       passportNumber: passportNumber,
       password:password
   }),{headers:{"Content-Type":"application/json"}}

        )
      navigate("/");
        
     };
        
        return(
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
          <Box component="form" onSubmit={clickSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                 
                  name="firstName"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(event)=>setfirstname(event.target.value)}
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(event)=>setpassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  label="Home Address"
                  value={homeAddress}
                  onChange={(event)=>sethomeAddress(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  label="Country Code"
                  value={countryCode}
                  onChange={(event)=>setcountryCode(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  label="Telephone Number"
               value={telephoneNumber}
               onChange={(event)=>settelephoneNumber(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  label="Passport Number"
                 value={passportNumber}
                 onChange={(event)=>setpassportNumber(event.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
        ) 
    
    };




export default Register;