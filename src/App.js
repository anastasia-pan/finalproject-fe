// import logo from "./logo.svg";
 import "./App.css"
import Test from "./components/Test.jsx"
import { useState, setState } from "react";

function App() {
  const [data, setData] = useState({});
  return (
    <div>
      <h1>Hello World</h1>
      <Test data={data} setData={setData} />
    </div>
  );
}

export default App;
