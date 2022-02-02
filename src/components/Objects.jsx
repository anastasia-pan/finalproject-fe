import Location from "./Location";
import Decade from "./Decade";
import Category from "./Category";

import {
    BrowserRouter as Routes, Route,
    Link
  } from "react-router-dom";
  
const Objects = () => {

    return (

        <div>

    <div className="searchNav">
    <ul>
      <li>
        <input type="text" placeholder="Search..."></input>
      </li>
      <li>
        <Link to='/objects/location' >Location</Link>
      </li>
      <img src={Logo} className="logo" alt="logo" />

      <li>
        <Link to='/objects/decade' >Decade</Link>
      </li>

      <li>
        <Link to='/objects/category' >Category</Link>
      </li>

      <li>
        <Login user={user} setUser={setUser}/>
      </li>
    </ul>

    </div>

    <Routes>  
          <Route path='/objects/location' element={<Location/>} />
          <Route path='/objects/decade' element={<Decade/>} />
          <Route path='/objects/category' element={<Category/>} />
   
    </Routes>


        </div>

    )
}

export default Objects;
