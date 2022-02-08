import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./Login";
import Register from "./Register"
function Navbar({ user, setUser }) {
  const logOut = () => {
    setUser(null);
  };

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
              <Login user={user} setUser={setUser} /> 
              <Register/>
              
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
