import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Numbers from "./components/numbers/Numbers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Numbers />
    </div>
  );
}

export default App;
