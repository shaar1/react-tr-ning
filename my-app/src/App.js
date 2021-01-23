import React from "react";
import Navbar from "./navbar";
import Greeter from "./Greeter";

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Greeter name="Karen" />
      <Greeter name="Tammy" />

         <h1>HELLO FROM APP!</h1>
         
    </div>

  );
}

export default App;
