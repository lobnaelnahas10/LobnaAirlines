import React from 'react';
import dd from './dd.jpg'; // Tell webpack this JS file uses this image
import '../index.js';
import { ImageBackground, StyleSheet, Text, View } from "react-native";


function Header() {
 
  return(
<>
    <View style={styles.container}>
    <ImageBackground source={dd} resizeMode="cover" style={styles.image}  style={{width: '100%', height: '100%'}} >
      <Text style={styles.text}>Travel With Us!</Text>

    </ImageBackground>
  </View>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
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


export default Header;