import {useState,useEffect} from 'react';
import queryString from 'query-string';
import axios from 'axios'
import SmallCard from '../component/SmallCard'
const SearchResults =()=>{

    const[flights,setFlights]=useState([]);
    
    useEffect(()=>{
    const {flight_number,departure_time,arrival_number,departure_date,arrival_date,to,from}=queryString.parse(window.location.search);
        AllFlights({flight_number,departure_time,arrival_number,departure_date,arrival_date,to,from})
        .then(res=>{
                setFlights(res.data);
            })
    },[window.location.search]);

    const AllFlights = async (query)=> await axios.post("http://localhost:8000/search-listings",query);

return(
    <>
    <div className="container-fluid p-5 text-center"> 
    <h1> Search Results
        </h1>
    </div>
    <div className="container-fluid">
      {flights.map((f)=> <SmallCard key={f._id} f={f} />)}
    </div>
</>
)};
export default SearchResults;