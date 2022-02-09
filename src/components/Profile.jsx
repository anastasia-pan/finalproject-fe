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

  const addNewTotem = async (object) => {
    const payload = JSON.stringify(object);
    const res = await fetch(`${process.env.REACT_APP_API}/totem/${user.id}`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    let returnedTotem = await res.json();
    addExistingtoFav(returnedTotem);
  };

  return (
    <div>
      <h1 className="profile">Profile </h1>
      <div className="userList">
        {/* map all from user favourites */}
        {userList.map((item, index) => {
          console.log(item);
          console.log(item.name);
          return (
            <>
              <Card key={index} item={item} />
              <button value="delete" onClick={() => deletefromFavList(item)}>
                delete
              </button>
            </>
          );
        })}
      </div>
      <div>
        <div> Add new object</div>
        <button onClick={addNewTotem}> Add your own object </button>
      </div>
      {/* map all objects from admin database */}
      <div className="cardContainer">
        {allObjects.map((item, index) => {
          return (
            <>
              <Object key={item.id} item={item} />
              <button
                key={index}
                value="add"
                onClick={() => addExistingtoFav(item)}
              >
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
      <img src={item.url} alt="totem" />
    </div>
  );
};

export default Profile;
