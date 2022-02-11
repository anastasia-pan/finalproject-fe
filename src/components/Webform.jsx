import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Profile from "./Profile";



function CreateTotem ({user, populateListfromFav, addExistingtoFav, deletefromFavList}) {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate]= useState("");
  const [description, setDescription]=useState("");
  const baseUrl = `${process.env.REACT_APP_BASE_URL}/totem/${user.id}`;
  

  const handleNameChange = (e) => setName(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleDateChange =(e) => setDate (e.target.value);
  const handleDescriptionChange=(e) => setDescription(e.target.value)

  const submitForm = async (e) => {
    e.preventDefault();
    const imageLink= "https://i.ibb.co/fpKc3gh/placeholder.png"
    const payload = JSON.stringify({
      name: name,
      location:location,
      date:date,
      description:description,
      image: imageLink,
      illustration: imageLink
    });
    console.log(payload)
    const res = await fetch(baseUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    let returnTotem = await res.json()
    addExistingtoFav(returnTotem)
  };
  return (
    <form onSubmit={submitForm}>
      <div className="totemForm">
      <h1>Create Totem</h1>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={handleNameChange} />

      <label htmlFor="location">Location:</label>
      <input type="text" name="location" value={location} onChange={handleLocationChange} />

      <label htmlFor="date">Year Found:</label>
      <input type="text" name="date" value={date} onChange={handleDateChange} />

      <label htmlFor="description">Description:</label>
      <input type="text" name="description" value={description} onChange={handleDescriptionChange} />
      </div>

    
      <center><input type="submit" value="Submit" className="button-19 submit" role="button" /></center>
      

    </form>
  );
}

export default CreateTotem;
