import React from "react";
import CartItem from "./CartItem";

function Cart({ items }) {
return(
    <div>
        <h1> I AM CART</h1>
        <ul>
            {items.map(item => (
        <CartItem{...item}/>
        ))}
        </ul>
    </div>
  )
}

export default Cart;

