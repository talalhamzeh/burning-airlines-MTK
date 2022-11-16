import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import './Navbar.css'

function Navbar() {
  return (
    
    <div id="nav">
    <ul>
        <li>
           
        <Link to="/home">Home</Link>
        
        </li>
        <li>
            <Link to="/flights"> Flights </Link>
        </li>
        <li>
            <Link to="/reservations">Reservations</Link>
        </li>
        <li>
            <Link to="/airplanes">Airplanes </Link>
        </li>
        
        <li>
            <Link to='/login'>Log In</Link>
        </li>
        <li>
            <Link to='/signup'>Sign Up</Link>
        </li>

        
  

    </ul>
</div>
  );
}

export default Navbar;