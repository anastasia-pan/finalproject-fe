import { useState, useEffect } from "react";
import Modal from "./Modal";
import CreateTotem from "./Webform";



const Profile = ({ user, allObjects, setAllObjects }) => {
  //User's favourite list, triggered at UseEffect
  const [userList, setUserList] = useState([]);
  //Modal open and close states
  const [isOpen, setIsOpen] =useState(false)
  //function that gets all admin totems from database and sets state for allObjects
  const getAllTotems = async () => {
    const res = await fetch(
      //   process.env url needed WILL BE CHANGED ALSO
      `${process.env.REACT_APP_BASE_URL}/admin/totem`,

      {
        mode: "cors",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await res.json();
    console.log(user);
    setAllObjects(data);
  };
  //fetches all of user favs from UserFavourites table
  //and sets userList
  const populateListfromFav = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/favourites/${user.id}`,
      {
        mode: "cors",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const list = await res.json();
    setUserList(list);
  };
  //triggered by user, populates userList and gets all objects
  useEffect(() => {
    if (user) {
      populateListfromFav();
      getAllTotems();
    }
  }, [user]);
  //adds Totem from central database to userList
  const addExistingtoFav = async (object) => {
    await fetch(
      `${process.env.REACT_APP_BASE_URL}/favourites/${user.id}/${object.id}`,
      {
        mode: "cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    populateListfromFav();
  };

  //deletes Totem from UserFavourites table and
  //set UserList state
  const deletefromFavList = async (object) => {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/favourites/${user.id}/${object.id}`,
      {
        mode: "cors",
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    populateListfromFav();
  };
  //adds a brand new Totem to database, and adds to user favourites
  const addNewTotem = async (object) => {
    const placeholderURL = "https://i.ibb.co/94KDG3b/placeholder.png";
    const payload = JSON.stringify(object);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/totem/${user.id}`,
      {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      }
    );
    let returnedTotem = await res.json();
    addExistingtoFav(returnedTotem);
  };

  //maps through all objects, and user's favourites, using the Totem component (below)
  return (
    <div className="profilePage">
      <div className="welcomeFrame animate__animated animate__bounceInDown animate__delay-0s animate__repeat-1	1 animate__slow	2s ">
        <h1 className="welcome">Welcome {user.username} </h1>
      </div>
      <div className="profileBlurb">
          <div className="blurb animate__animated animate__fadeIn animate__delay-1s animate__repeat-1	1 animate__slower	3s ">
          <h3>Here you can create your very own list of creepy curios! You can add objects from our featured collection, or add your own!
              Simply click 'Add' below your chosen object or 'Add your own object' and fill in the form to add your own object to your list!</h3>
          </div>
      </div>

      <div className="userListContainer">
        {/* map all from user favourites */}
        {userList.map((item, index) => {
          return (
            <div className="CardAndDeleteButton">
              <Totem key={index} item={item} />
              <div className="deleteButton">
                <button
                  className="button-19 "
                  value="delete"
                  onClick={() => deletefromFavList(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      
        
      <div class="addNewObj">
        <button className="button-19" onClick={()=> setIsOpen(true)}>
        {" "}
          <h2>Add your own object</h2>{" "}
          </button>
          <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
            <CreateTotem user={user}  />
             </Modal>
       
      </div>

      <div class="adminListContainer">
        {/* map all objects from admin database */}
        {allObjects.map((item, index) => {
          return (
            <>
              <div className="cardAndAddButton">
                <Totem key={item.id} item={item} />
                <div className="addButton">
                  <button
                    className="button-19"
                    key={index}
                    value="add"
                    onClick={() => addExistingtoFav(item)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

const Totem = ({ item }) => {
  return (
    <div className="totemCard">
      <img src={item.illustration} alt="totem" className="totemIllus" />
      <div className="totemName">
        <h2>{item.name}</h2>
        <h3>{item.date}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Profile;
