import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, {useState} from 'react'
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register"

function Navbar({ user, setUser }) {
  const logOut = () => {
    setUser(null);
  };
  const [isOpen, setIsOpen]=useState(false)

  return (
    <div className="navBar">
      
      <nav>
        <ul>
          <li>
            <Link to="/" className="middle">
              Home
            </Link>
          </li>
          <li>
            <Link to="/objects" className="middle">
              Find Objects
            </Link>
          </li>

          <li>
            function 
            {user ? (
              <>
                <Link to="/profile" className="middle">
                  Profile
                </Link>
                <button type="submit" onClick={logOut}>
                  Log out
                </button>
              </>
            ) : (
              <>
              <button onClick={()=>setIsOpen(true)}>Login/Register</button>
              <Modal open={isOpen} onClose={()=> setIsOpen}>
              <Login user={user} setUser={setUser} /> 
              <Register/>
              </Modal>
              </>
            )}
          </li>

          {/* <li><Login user={user} setUser={setUser}/></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
