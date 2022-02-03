import {
   
    Link
  } from "react-router-dom";
  
const Objects = () => {

    return (


      
        <div>

            <h1>Objects</h1>


    <ul className="objectNav">
    <li>
        <Link to='/objects' >All Objects</Link>
      </li>

      <li>
        <Link to='/objects/location' >Location</Link>
      </li>

      <li>
        <Link to='/objects/decade' >Decade</Link>
      </li>

      <li>
        <Link to='/objects/category' >Category</Link>
      </li>

    </ul>



    


        </div>



    )
}

export default Objects;
