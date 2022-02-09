import { useEffect, State, useState } from "react";

const Test = ({ data, setData }) => {
  const [firstRun, setFirstRun] = useState(true);
  useEffect(() => {
    console.log(process.env);
    console.log("got here");
    const fetchData = async () => {
      //http://localhost/(landing page)
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/test`, {
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
  }, []);

  return (
    <div className="Test">
      <h3>{JSON.stringify(data)}</h3>
    </div>
  );
};

export default Test;
