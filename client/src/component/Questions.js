import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import '../index.css';
import FAQS1 from './FAQS1.jpg';
const Questions=()=>{



    return(
        <div>
           <>
        <View style={styles.container}>
          <ImageBackground source={FAQS1} resizeMode="cover" style={styles.image}  style={{height: '100%'}} >
            <Text style={styles.text}>FAQS</Text>
      
          </ImageBackground>
        </View>
        
        </>
        <div className='container fluid'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What are the maximum dimensions and weight restrictions for my cabin baggage?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            In Economy Class you can bring a single carry-on that must have dimensions of no more than 23x40x55 cm and a maximum weight of 8 kg. Business Class passengers can bring two pieces carry-ons that must each have dimensions of no more than 23x40x55 cm and a maximum weight of 8 kg. For more detailed information please visit our cabin baggage page.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>What is a Known Traveler number?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            This number is used for flights to the US and shows that the pre-flight checks and safety scans required for the trip have been completed.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>When can I check-in online?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Online check-in starts 24 hours before the flight and ends 90 minutes before the flight. You can check whether there is an online check-in option at the airport where your flight will take place, from the list of online / mobile check-in facilities at the airports.

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>When does check-in close at the airport?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            The check-in desk closes 60 minutes before departure for domestic flights and 75 minutes beforehand for international flights.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How can I be informed of an extraordinary circumstance declaration?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Cases of extraordinary circumstances are announced on our website.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How will I be informed of a schedule change?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Marwa7a Airlines notifies passengers by text messages and e-mail in case of a schedule change.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Which channels can I use to confirm, change or cancel the new flight in case of a flight change?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Marwa7a Airlines notifies our passengers via text message and e-mail in case of flight cancelation. You can also check on your flight status through our website and mobile application.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Can I buy a ticket with my credit card and pay in installments?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            You can pay for your ticket in installments when using a credit card from one of our partner banks. Please visit our payments page for details of partner banks and installment options.

            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
      </div>
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
export default Questions;