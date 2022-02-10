import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function CreateTotem ({user}) {

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
    const payload = JSON.stringify({
      name: name,
      location:location,
      date:date,
      description:description,
    });
    const res = await fetch(baseUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
  };
  return (
    <form onSubmit={submitForm}>
      <h1>Create Totem</h1>
      <label htmlFor="name">Totem Name:</label>
      <input type="text" name="name" value={name} onChange={handleNameChange} />

      <label htmlFor="location">Totem Found:</label>
      <input type="text" name="location" value={location} onChange={handleLocationChange} />

      <label htmlFor="date">Year Found</label>
      <input type="text" name="date" value={date} onChange={handleDateChange} />

      <label htmlFor="description">Totem Description:</label>
      <input type="text" name="description" value={description} onChange={handleDescriptionChange} />


    

      <input type="submit" value="Submit" className="button-19 submit" role="button" />
    </form>
  );
}

export default CreateTotem;
