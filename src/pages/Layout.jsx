import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

import App from "../components/App";
import Login from "../components/UserLogin/Login";
import Signup from "../components/UserLogin/Signup";
const Layout = () => {
    return (
    <>
        <App />
        <Navbar />
        <Outlet />
       
       
       
    </>
    );
};

export default Layout;