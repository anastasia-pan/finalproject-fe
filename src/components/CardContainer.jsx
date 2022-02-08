import Card from "./Card";

import { useState, useEffect } from "react";

const CardContainer = ({ allObjects, setAllObjects }) => {
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

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="cardContainer">
      {allObjects.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CardContainer;
