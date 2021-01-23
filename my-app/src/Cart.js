import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart({items}) {

    const [stateItems, setItems] = useState(items);

    const updateQty = (id, newQty) => {
        const newQtyI = items.map(item => {
            if (item.id === id){
                return {...item, qty: newQty }
            }
            return item;
        })
        setItems(newQty);
    }

    const grandTotal = items.reduce((total, item) => (
        total + item.qty * item.price
    ), 0).toFixed(2);

 return (
    <div className="Cart">
        <h1> I AM CART</h1>
        <div className="CartItem">
        {items.map(item => (
          <CartItem key={item.id} updateQty={updateQty} {...item}/>
          ))} 
        </div>
        <h3>Grand Total: ${grandTotal}</h3>
    </div>
  )
}

export default Cart;

