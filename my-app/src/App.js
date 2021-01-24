import React from "react";
import Navbar from "./navbar";
import Greeter from "./Greeter";
import Counter from "./Counter";
import Cart from "./Cart";
import CartItem from "./CartItem"
import './App.css';

const items = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, name: "Pinto Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Sour Cream", price: 3.50, qty: 1 },

]

function App() {
  return (
    <div>
      <Cart items={items} />
      <Counter />
      <Navbar />
      <Greeter name="Karen" />
      <Greeter name="Tammy" />

      <h1>HELLO FROM APP!</h1>

    </div>

  );
}

export default App;
