import React from 'react';
import {useState} from "react";
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer,toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';
import { ToastHeader } from 'react-bootstrap';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Login=({})=>{
    const [userName,setuserName]=useState();
    const [password,setpassword]=useState();


    const navigate = useNavigate();
  const dispatch =useDispatch();
  const theme = createTheme();

     
    const clickSubmit= async function(event){
        event.preventDefault(event);
       try {
         let res=  await axios.post("http://localhost:8000/signin",JSON.stringify({userName: userName, 
         password:password}),
         {headers:{"Content-Type":"application/json"}});


        window.localStorage.setItem('auth',JSON.stringify(res.data));
        dispatch({
            type:'LOGGED_IN_USER',
            payload: res.data,
        });
        window.history.go(-1)
     
       }
       
       catch(err){
         if(err.response.status===400) toast(err.response.data);
       }
      }
         return (
          <ThemeProvider theme={theme}>
             <ToastContainer position="top-center" />
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
                  Sign in
                </Typography>
                <Box component="form" onSubmit={clickSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    
                    label="User Name"
                    
                    autoComplete="email"
                    autoFocus
                    value={userName}
                    onChange={(event)=>setuserName(event.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    label="Password"
              
                    autoComplete="current-password"
                    value={password}
                    onChange={(event)=>setpassword(event.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs> 
                    </Grid>
                    <Grid item>
                      <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
             
            </Container>
          </ThemeProvider>
        );
}

export default Login;
