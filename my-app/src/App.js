import React from "react";
import Navbar from "./navbar";
import Greeter from "./Greeter";
import Counter from "./Counter";

import './App.css';

function App() {
  return (
    <div>
      <Counter />
      <Navbar />
      <Greeter name="Karen" />
      <Greeter name="Tammy" />

         <h1>HELLO FROM APP!</h1>
         
    </div>

  );
}

export default App;
