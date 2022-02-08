import "./App.css";

import Test from "./components/Test.jsx";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Location from "./components/Location";
import Decade from "./components/Decade";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import Login from "./components/Login";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [data, setData] = useState({});
  const [user, setUser] = useState(null);
  const [allObjects, setAllObjects] = useState([]);

  return (
    <Router>
      <div className="container">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/objects"
            element={
              <CardContainer
                allObjects={allObjects}
                setAllObjects={setAllObjects}
              />
            }
          />
          <Route path="/objects/location" element={<Location />} />
          <Route path="/objects/decade" element={<Decade />} />
          <Route path="/objects/category" element={<Category />} />

          <Route
            path="/profile"
            element={<Profile user={user} allObjects={allObjects} />}
          />

          <Route path="/login" element={<Login />} />
        </Routes>
        <Test data={data} setData={setData} />
      </div>
    </Router>
  );
}

export default App;
