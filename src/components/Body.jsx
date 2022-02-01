import { useEffect, State, useState } from "react";

const Body = ({ data, setData }) => {
  const [firstRun, setFirstRun] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      //http://localhost/(landing page)
      const res = await fetch(`${process.env.REACT_APP_API}/`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setData(data);
    };
    if (firstRun) {
      setFirstRun(false);
      fetchData();
    }
  });

  return (
    <div>
      <h3>{JSON.stringify(data)}</h3>
    </div>
  );
};

export default Body;
