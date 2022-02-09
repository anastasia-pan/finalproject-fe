import Card from "./Card";
import { State, useState, useEffect } from "react";

const Profile = ({ user, allObjects, setAllObjects }) => {
  const [userList, setUserList] = useState([]);
  const [trigger, setTrigger] = useState(true);

  const handleFetch = async () => {
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

    setAllObjects(data);
  };

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
    console.log(list);
  };

  useEffect(() => {
    if (user) {
      populateListfromFav();
      handleFetch();
    }
  }, [user]);

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

  const deletefromFavList = async (object) => {
    console.log(user);
    console.log(user.id);
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

  const addNewtoDBandFav = async () => {};

  return (
    <div class="profilePage">
        <div className="welcomeFrame">
      <h1 className="welcome">Welcome {user.name} </h1>
      </div>

      <div class="userListContainer">

        {/* map all from user favourites */}
        {userList.map((item, index) => {
          console.log(item);
          console.log(item.name);
          return (
            <div className="CardAndDeleteButton">
              <Card key={index} item={item} />
              <div className="deleteButton">
              <button class="button-19 " role="button" value="delete" onClick={() => deletefromFavList(item)}>
                Delete
              </button></div>
              </div>
          );
        })}
      </div>
      
      <div class="addNewObj">
        <button class="button-19" role="button" onClick={addNewtoDBandFav}> Add your own object </button>
      </div>

      <div class="adminListContainer">
      {/* map all objects from admin database */}
        {allObjects.map((item, index) => {
          return (
            <>
            <div className="cardAndAddButton">
              <Object key={item.id} item={item} />
              <div className="addButton">
              <button
                class="button-19" role="button"
                key={index}
                value="add"
                onClick={() => addExistingtoFav(item)} >
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



const Object = ({ item }) => {
  return (
    <div class="totemCard">
    <img src={item.url}  alt="totem" />
      <p>Name: {item.name}</p>
      <p>Date: {item.date}</p>
      <p>Location: {item.location}</p>
      <p>Description: {item.description}</p>.
      
    </div>
  );
};

export default Profile;
