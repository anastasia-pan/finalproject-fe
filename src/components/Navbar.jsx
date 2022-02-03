import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import creepy from "../assets/creepy.png";
import Login from "./Login";
function Navbar({ user, setUser }) {
  const logOut = () => {
    setUser(null);
  };

  return (
    <div className="navBar">
      <img src={creepy} alt="creepy curios" className="logo" />
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
              <Login user={user} setUser={setUser} />
            )}
          </li>

          {/* <li><Login user={user} setUser={setUser}/></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
