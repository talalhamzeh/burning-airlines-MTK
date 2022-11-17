import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

import Login from "../components/UserLogin/Login";
import Signup from "../components/UserLogin/Signup";
import Home from "./Home";

const Layout = (props) => {
  const [loginCredentials, setLoginCredentials] = useState({
    isLoggedIn: false,
    user: {},
  });

  useEffect(() => {
    loginStatus();
  }, []);

  const loginStatus = () => {
    axios
      .get("http://localhost:3000/login", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          handleLogin(response);
        } else {
          handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
  const handleLogin = (data) => {
    setLoginCredentials({
      isLoggedIn: true,
      user: data.user,
    });
  };
  const handleLogout = () => {
    setLoginCredentials({
      isLoggedIn: false,
      user: {},
    });
  };

  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default Layout;
