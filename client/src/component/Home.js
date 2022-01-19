import 'antd/dist/antd.css';
import {useSelector,serSelector,useStore} from 'react-redux';
import Header from "./Header";
import SearchHome from "../component/SearchHome";
import ImageCard from "./ImageCard";

import spain1 from './spain1.jpg';
import italy from './italy.jpg';
import egypt from './egypt.jpg';
import CardForHome from './CardForHome';
import FAQS from './FAQS';

const Home =()=>{
  
  const styles = {
    width:'100rem'
};
    return (
      <div>
      <div>
        <Header/>
        <div>
        </div>
        </div>
        <div className="container-fluid h1 p-5 text-center">
            <div className='col'>
            </div>
<SearchHome/>
             </div>
<div className='container'>
  <CardForHome/>
</div>

             </div>
    )
};
export default Home;