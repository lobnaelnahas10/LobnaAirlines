import React from 'react';
import {Link} from 'react-router-dom';


const AdminDashBoard =()=>{
    return(
    <div>
        <div>
            <h1>Admin DashBoard</h1>
        </div>
<ul className="container"> 
<li className="container">
  <Link to='/'>  
<button className="btn btn-primary">Home</button>
</Link>
</li>
<li className="container">
<Link to='/viewAllFlights'>   
<button className="btn btn-primary">View All Flights</button>
</Link>
</li>
<li className="container">
    <Link to="/createflight">
<button className="btn btn-primary">Create Flight</button>
</Link>
</li>
<li className="container">
    <Link  to="/searchflights">
<button className="btn btn-primary">Search Flights</button>
</Link>
</li>
</ul>
    </div>
    )
};



export default AdminDashBoard;