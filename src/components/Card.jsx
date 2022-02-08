import { Link } from "react-router-dom";

import Object from "./Object";

const Card = ({ item }) => {
  // item.id} id={item.id} url={item.image} name={item.name} location={item.location} date={item.date} description={item.description}

  return (
    <div className="Card">
      <img src={item.url} />
      <Object item={item} key={item.id} />
    </div>
  );
};

export default Card;
