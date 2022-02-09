import { State, useState, useEffect } from "react";

const Profile = ({ user, allObjects, setAllObjects }) => {
  //User's favourite list, triggered at UseEffect
  const [userList, setUserList] = useState([]);
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

  //maps through all objects, and user's favourites, using the Totem component (below)
  return (
    <div>
      <h1 className="profile">Profile </h1>
      <div className="userList">
        {/* map all from user favourites */}
        {userList.map((item, index) => {
          return (
            <>
              <Totem key={index} item={item} />
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
              <Totem key={item.id} item={item} />
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

const Totem = ({ item }) => {
  return (
    <div>
      <p>Name: {item.name}</p>
      <p>Date: {item.date}</p>
      <p>Location: {item.location}</p>
      <p>Description: {item.description}</p>
      <img src={item.url} alt="totem" />
    </div>
  );
};

export default Profile;
