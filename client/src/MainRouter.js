import React from 'react';
import {Route,Routes, BrowserRouter} from 'react-router-dom';
import Home from "./component/Home"

import Menu from "./component/Menu";
import SearchPage from "./component/SearchPage";
import CreateFlight from './Flight/CreateFlight';
import UpdateFlight from './Flight/UpdateFlight';
import ViewFlights from './Flight/ViewFlights';
import SearchResults from './Flight/SearchResults';
import ViewAllFlights from './User/ViewAllFlights';
import Register from './auth/Register';
import Login from './auth/Login';
import ViewAllReservations from './User/ViewAllReservations';
import UpdateInfo from './User/UpdateInfo';
import PrivateRoute from './component/PrivateRoute';
import AdminRoute from './component/AdminRoute';
import AdminDashBoard from "./component/AdminDashBoard";
import ChooseDepFlight from './User/ChooseDepFlight';
import ChooseRetFlight from './User/ChooseRetFlight';
import ChooseSeats from './User/ChooseSeats';
import  Footer  from "./component/Footer";
import About from "./component/About-us"
import UpdateDepSeats from './User/UpdateDepSeats';
import UpdateRetSeats from './User/UpdateRetSeats';
import UpdateDepDiffCabin from './User/UpdateDepDiffCabin';
import UpdateFlightSeatsCabin from './User/UpdateFlightsSeatsCabin';
import Questions from './component/Questions';
import ChangePassword from './User/ChangePassword';
const MainRouter =()=>{
    return(
    <BrowserRouter>
    <div>
        <Menu/>
            <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/aboutus" element={<About/>}></Route>
            <Route exact path="/signup" element={<Register/>}></Route>
            <Route exact path="/signin" element={<Login/>}></Route>
            <Route exact path="/aboutus" element={<About/>}></Route>
            <Route exact path="/questions" element={<Questions/>}></Route>
            <Route exact path="/updateRetSeatsDiffCabin" element={<PrivateRoute><UpdateDepDiffCabin/></PrivateRoute>}></Route>
            <Route exact path="/passwordReset" element={<PrivateRoute><ChangePassword/></PrivateRoute>}></Route>
            <Route exact path="/depAndret" element={<PrivateRoute><UpdateFlightSeatsCabin/></PrivateRoute>}></Route>
            <Route exact path="/updateRetSeats" element={<PrivateRoute><UpdateRetSeats/></PrivateRoute>}></Route>
            <Route exact path="/updateDepSeats" element={<PrivateRoute><UpdateDepSeats/></PrivateRoute>}></Route>
            <Route exact path="/createflight" element={<AdminRoute><CreateFlight/></AdminRoute>}></Route>
            <Route exact path="/viewAllFlights" element={<AdminRoute><ViewFlights/></AdminRoute>}></Route>
            <Route exact path="/searchflights" element={<AdminRoute><SearchPage/></AdminRoute>}></Route>
            <Route exact path="/viewAllFlights/updateflight/:flightid" element={<AdminRoute> <UpdateFlight/></AdminRoute>}></Route>
            <Route exact path="/search-result" element={<AdminRoute><SearchResults/></AdminRoute>}></Route>
          <Route exact path="/searchresults" element={<ViewAllFlights/>}></Route>
            <Route exact path="/depFlights" element={<ChooseDepFlight/>}></Route>
            <Route exact path="/retFlights" element={<ChooseRetFlight/>}></Route>
            <Route exact path="/flightSeat" element={<ChooseSeats/>}></Route>
            <Route exact path="/viewAllReservations" element={<PrivateRoute><ViewAllReservations/></PrivateRoute>}></Route>
            <Route exact path="/updateUserInfo/:userid" element={<PrivateRoute><UpdateInfo/></PrivateRoute>}></Route>
            <Route exact path="/AdminDashBoard" element={<PrivateRoute> <AdminDashBoard/></PrivateRoute>}></Route>
       </Routes>
       <Footer/>
    </div>
    </BrowserRouter>
    )
};
export default MainRouter;