import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { NavBar } from "./components/NavBar";


function App() {
  const [view, setView] = useState("login");

  return (  
    <>
    <NavBar />
    </>
  );
}

export default App;
