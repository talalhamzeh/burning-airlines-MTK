import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

import App from "../components/App";
import Login from "../components/UserLogin/Login";
import Signup from "../components/UserLogin/Signup";
import Home from "./Home";


const Layout = () => {
    return (
    <>
        
        
        <Navbar />
       
        <Outlet />
     
        
       
       
       
    </>
    );
};

export default Layout;