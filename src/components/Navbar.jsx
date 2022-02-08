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
            <Link to="/location" className="middle">
              Locations
            </Link>
          </li>
          <li>
            <Link to="/decades" className="middle">
              Decades
            </Link>
          </li>
          <li>
            <Link to="/decades" className="middle">
              Category
            </Link>
          </li>
          {/* <li>
            <Link to="/login" className="middle">
              Login/Register
            </Link>
          </li> */}
          
          <li>
             
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
              <li className="signinRegister" onClick={()=>setIsOpen(true)}>Sign-in/ Register</li>
              <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
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
