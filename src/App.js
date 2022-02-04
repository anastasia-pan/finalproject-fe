import "./App.css";

import Test from "./components/Test.jsx";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Objects from "./components/Objects";
import Location from "./components/Location";
import Decade from "./components/Decade";
import Category from "./components/Category";
import Navbar from "./components/Navbar"
import Register from "./components/Register"

import creepy from "./assets/creepy.png";

import { useState, State } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [data, setData] = useState({});
  const [user, setUser]= useState(null);

  return (
    <Router>
      <div className="container">
       
        <Navbar user={user} setUser={setUser} /> 
       
       


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/objects" element={<Objects />} />
          <Route path="/objects/location" element={<Location />} />
          <Route path="/objects/decade" element={<Decade />} />
          <Route path="/objects/category" element={<Category />} />
          <Route path="/profile" element={<Profile />} />

          {/* // user={user} setUser={setUser}/>} /> */}
        </Routes>

        <Test data={data} setData={setData} />
      </div>
    </Router>
  );
}

export default App;
