import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Flights from "./pages/Flights";
import Reservations from "./pages/Reservations";
import Home from "./pages/Home";
import Login from "./components/UserLogin/Login";
import Signup from "./components/UserLogin/Signup";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="flights" element={<Flights />} />
          <Route path="reservations/:flight_id" element={<Reservations />} />
          
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));