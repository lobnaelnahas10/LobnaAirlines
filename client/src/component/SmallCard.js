import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import axios from 'axios';
import {Link} from 'react-router-dom';
const SmallCard =({ f,owner=false }) =>{

const handleFlightDelete =(id)=>{ 
    if(!window.confirm("Are You Sure You Want to Delete this flight")) return;
    axios.delete(`http://localhost:8000/flightDelete/${id}`);
   
}

    return(
 <>
<div className="card mb-3" >
   <div className="col-md-7">
   </div>
   <div className="col-md-8">
       <div className="card-body">
           <h5 className="card-title">Flight Number: {f.flight_number} <span className="float-right"></span> </h5>
           <h4 className="card-title">Departure Time :{f.departure_time} </h4>
           <h4 className="card-title">Arrival Time:{f.arrival_number} </h4>
           <h4 className="card-title">Departure Date: {f.departure_date} </h4>
           <h4 className="card-title">Arrival Date: {f.arrival_date} </h4>
           <h4 className="card-title">Economy Seats: {f.numberOfEcoSeats} </h4>
           <h4 className="card-title">Business Seats: {f.numberOfBuisnessSeats} </h4>
           <h4 className="card-title">To: {f.to} </h4>
           <h4 className="card-title">From: {f.from} </h4>
       </div>
       <div className="d-flex justify-content-between h4">
    <Link to={`updateflight/${f._id}`}>
        <EditOutlined className="text-warning" />
    </Link>
    <DeleteOutlined onClick={()=> handleFlightDelete(f._id)} className="text-danger" />
   </div>
   </div>
</div>
</>
    )}

export default SmallCard;