import axios from "axios";
import { useState,useEffect } from "react";
import SmallCard from "../component/SmallCard";



const ViewFlights =({f}) =>{
    const [flights,setFlights]=useState([]);

   useEffect(()=>{
    loadAllFlights()
    },[])

const AllFlights = async ()=> await axios.get("http://localhost:8000/viewAllFlights");

const loadAllFlights  = async ()=>{
let res = await AllFlights();
console.log(res);
setFlights(res.data);
};

return(
    <>
    <div className="container-fluid p-5 text-center"> 
    <h1> All Flights
    </h1>
    <div className="container-fluid">
      {flights.map((f)=> <SmallCard key={f._id} f={f} />)}
    </div>
    </div>

</>
)
 }

export default ViewFlights;