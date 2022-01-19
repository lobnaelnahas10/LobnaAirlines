import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import tk1 from './tk1.jpg';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useNavigate } from "react-router-dom";
import '../index.css';
const About = () => {
  const navigate = useNavigate();
  const handlelink=()=>{
navigate("/")
  }
  return (
    <>
  <View style={styles.container}>
    <ImageBackground source={tk1} resizeMode="cover" style={styles.image}  style={{height: '100%'}} >
      <Text style={styles.text}>About us</Text>

    </ImageBackground>
  </View>
  <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" className='h5' component="h1" gutterBottom>
        Welcome to Marwa7a Airways. From our home in Egypt, we fly to passenger and cargo destinations in the Middle East, Africa, Europe, Asia, Australia and North America. Together with our codeshare partners, our network offers access to hundreds of international destinations in just one booking.

We believe that your journey with us should be more than just travel. We offer you a personalised experience, with options and choices every step of the way.
        </Typography>
        <Button variant="contained" onSubmit={handlelink} noLinkStyle href="/">
          Go to the main page
        </Button>
        
      </Box>
    </Container>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1 ,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100rem'
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 800,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000000",
    height: 500
  }
});
export default About;