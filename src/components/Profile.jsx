import Card from "./Card";
import { State, useState, useEffect } from "react";

const Profile = ({ user, allObjects }) => {
  const [userList, setUserList] = useState([]);
  const [trigger, setTrigger] = useState(true);


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
    populateListfromFav();
  }, []);

  const addExistingtoFav = async (object) => {
    const res = await fetch(
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
    <div>
      <h1 className="profile">Profile </h1>
      <div className="userList">
        {/* map all from user favourites */}
        {userList.map((item) => {
          console.log(item);
          console.log(item.name);
          return (
            <>
              {" "}
              <Card key={item.id} item={item} />
              {/* <button value="delete" onClick={() => deletefromFavList(item)}>
                delete{" "}
              </button> */}
            </>
          );
        })}
      </div>
      <div>
        <div> Add new object</div>
        <button onClick={addNewtoDBandFav}> Add your own object </button>
      </div>
      {/* map all objects from admin database */}
      <div className="cardContainer">
        {allObjects.map((item) => {
          return (
            <>
              <Object key={item.id} item={item} />;
              <button value="add" onClick={() => addExistingtoFav(item)}>
                Add
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

const Object = ({ item }) => {
  return (
    <div>
      <p>Name: {item.name}</p>
      <p>Date: {item.date}</p>
      <p>Location: {item.location}</p>
      <p>Description: {item.description}</p>.
      {/* <img src={totem.url}  alt="totem" /> */}
    </div>
  );
};

export default Profile;
