import { useState, useEffect } from "react";

const Dates = ({ user }) => {
  const [dateList, setDateList] = useState([]);

  const getAllTotems = async () => {
    let userdated;
    let url;
    if (user) {
      url = `${process.env.REACT_APP_BASE_URL}/totem/date/order/${user.id}`;
    } else {
      url = `${process.env.REACT_APP_BASE_URL}/totem/date/order`;
    }

    const res = await fetch(url, {
      mode: "cors",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const dated = await res.json();
    console.log(dated);
    if (user) {
    }
    setDateList(dated);
    console.log(dated);
  };

  useEffect(() => {
    getAllTotems();
  }, []);

  //======================= main return =======================//

  return (
    <div className="dateContainer">
      <div className="dateList">
        {dateList.map((item, index) => {
          return <DateIllus key={index} item={item} />;
        })}
      </div>
      <div className="verticalLine"></div>
    </div>
  );
};

const DateIllus = ({ item }) => {
  return (
    <div className="illusAndDateAndLine">
      <div className="IllusAndLine">
        <img src={item.illustration} alt="totem" className="totemIllusDate" />
        <div className="attachLine"></div>
      </div>

      <div className="totemNameDate">
        <h2>{item.name}</h2>
        <h2>Year: {item.date}</h2>
      </div>
    </div>
  );
};

export default Dates;
