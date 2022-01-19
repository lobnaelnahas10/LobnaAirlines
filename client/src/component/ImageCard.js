import {Link} from 'react-router-dom';
import aaa from './aaa.jpg'
const ImageCard =()=>{

  
 const  handleClick=()=>{
  
    }
return(
   
    <div className="container"style={{width:"80%"},{marginleft: "20%"}} >
<div className="card mb-3">
<img className="card-img rounded " src={aaa} alt="Card image"  height="400px" />
  <div className="card-body">
    <h5 className="card-title">Departure Flights</h5>
    <p className="card-text">Want to view flights that will departure Soon?</p>
    <h3>
    <Link to={``}>
    <button type="button" onClick={handleClick} style={{backgroundColor: 'offWhite'}} className="btn btn-light btn-lg">Show All</button>
    </Link>
    
    </h3>
  </div>
</div>
</div>

)
}
export default ImageCard;