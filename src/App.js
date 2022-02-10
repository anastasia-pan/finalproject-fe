import "./App.css";

// import Test from "./components/Test.jsx";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Location from "./components/Location";
import Decade from "./components/Decade";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
// import CardContainer from "./components/CardContainer";
// import Card from "./components/Card";
import Login from "./components/Login";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  //user global state
  const [user, setUser] = useState(null);
  //all admin provided objects state (set in Profile)
  const [allObjects, setAllObjects] = useState([]);

  return (
    <Router>
      <div className="container">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route
            path="/objects"
            element={
              <CardContainer
                allObjects={allObjects}
                setAllObjects={setAllObjects}
              />
            }
          /> */}
          <Route path="/location" element={<Location />} />
          <Route path="/decades" element={<Decade />} />

          <Route
            path="/profile"
            element={
              <Profile
                user={user}
                allObjects={allObjects}
                setAllObjects={setAllObjects}
              />
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Test data={data} setData={setData} /> */}
      </div>
    </Router>
  );
}

export default App;
