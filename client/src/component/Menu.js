import React from 'react';
import {Link} from 'react-router-dom';
import logo1 from './logo1.png';
import {useSelector,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import  { Component } from 'react'; 
import '../index.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem,Row,Col,FloatingLabel,Form } from 'react-bootstrap';
import "../index.css";
const Menu =()=>{
  const dispatch =useDispatch();
  const {auth} = useSelector((state)=>({...state}));
  const navigate = useNavigate();
  const logout =()=>{
    dispatch({
      type:'LOGOUT',
      payload: null,
    });
    window.localStorage.removeItem('auth');
    navigate("/signin");
  }
    return(
    <div>
        <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo1} width="40px" height="40px" />{' '}
          
        </Navbar.Brand>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
        <Nav>
        {auth!=null &&  auth.user.role!="Admin" && (
            <>
             <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href={`/updateUserInfo/${auth.user._id}`} >update my Info</Nav.Link>
            <Nav.Link href={`/passwordReset`} >Update My Password</Nav.Link>
            <Nav.Link href={`/viewAllReservations`}>View Reservation</Nav.Link>
            <Nav.Link onClick={logout}  >LOGOUT</Nav.Link>
            </>
        )}
 {auth!=null && auth.user.role!="NormalUser" && (  
   <>
           <Nav.Link href="/" >Home</Nav.Link>
           <Nav.Link href={`/AdminDashBoard`}>Admin DashBoard</Nav.Link>
            <Nav.Link onClick={logout}  >LOGOUT</Nav.Link>
   </>
 )}
 {auth==null&&(
   <>
   <Nav.Link href="/" >Home</Nav.Link>
<Nav.Link href="/signin">Sign In</Nav.Link>
 <Nav.Link href="/signup" >Sign Up</Nav.Link>
   </>
 )}
  </Nav>
  </Navbar.Collapse>
   </Navbar>
    </div>
    )
};



export default Menu;