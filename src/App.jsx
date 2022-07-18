import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);
  return (
    <div className="App">
      <h1>movies</h1>
    </div>
  );
}

export default App;
