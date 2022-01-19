
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
const ChangePassword =()=>{
  const[oldPassword,setoldPassword]=useState('');
  const[newPassword,setnewPassword]=useState('');
  const[userName,setuserName]=useState('');
  
  const {auth:{user},} =useSelector((state)=>({...state}));
 




const handleUpdate =()=>{ 
    if(!window.confirm("Are You Sure You Want to Update Your Password")) return;
    
    const data = {
userName:userName,
 oldPassword:oldPassword,
 newPassword:newPassword,
 
    }    
    axios.put(`http://localhost:8000/passwordReset`,data);
   
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
            Change Password
          </Typography>
          <Box component="form" onSubmit={handleUpdate} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="UserName"
                  autoFocus
                  value={userName}
                  onChange={(event)=>setuserName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Old Password"
                  value={oldPassword}
                  onChange={(event)=>setoldPassword(event.target.value)}
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="new Password"
                  value={newPassword}
                  onChange={(event)=>setnewPassword(event.target.value)}
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
            </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
            </>
    )

}
export default ChangePassword;