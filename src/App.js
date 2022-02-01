import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import { useState, setState } from "react";

function App() {
  const [data, setData] = useState({});
  return (
    <div>
      <h1>Hello World</h1>
      <Body data={data} setData={setData} />
    </div>
  );
}

export default App;
