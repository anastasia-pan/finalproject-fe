import Card from "./Card";

import { useState, useEffect } from "react";

const CardContainer = ({ allObjects, setAllObjects }) => {
  const handleFetch = async () => {
    const res = await fetch(
      //   process.env url needed WILL BE CHANGED ALSO
      "http://localhost/admin/totem",

      {
        mode: "cors",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await res.json();

    setAllObjects(data);

    console.log(data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="cardContainer">
      {allObjects.map((item) => {
        console.log(item);
        console.log(item.name);
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CardContainer;
