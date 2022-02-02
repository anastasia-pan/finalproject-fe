import "./App.css";

import Test from "./components/Test";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Objects from "./components/Objects";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [data, setData] = useState({});

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="" className="middle">
                Home
              </Link>
            </li>
            <li>
              <Link to="/objects" className="middle">
                Find Objects
              </Link>
            </li>
            {/* <img src={Logo} className="logo" alt="logo" /> */}

            <li>
              <Link to="/profile" className="middle">
                Profile
              </Link>
            </li>

            <li>{/* <Login user={user} setUser={setUser}/> */}</li>
          </ul>
        </nav>

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/objects" element={<Objects />} />
          <Route path="/profile" element={<Profile />} />
          {/* // user={user} setUser={setUser}/>} /> */}
        </Routes>

        <h1>Hello World</h1>
        <Test data={data} setData={setData} />
      </div>
    </Router>
  );
}

export default App;
