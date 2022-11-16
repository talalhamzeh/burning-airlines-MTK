import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/flights"> Flights </Link>
    //     </li>
    //     <li>
    //       <Link to="/reservations">Resarvations</Link>
    //     </li>

    //     <li>
    //       <Link to="/airplanes">Airplanes </Link>
    //     </li>
        
    //   </ul>
    // </nav>   
    <div id="nav">
    <ul>
        <li>
            <Link to="/">Home</Link>
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
    </ul>
</div>
  );
}

export default Navbar;