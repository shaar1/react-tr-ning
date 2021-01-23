import React from "react";


function CartItem ({ id, name, price, qty, updateQty }) {
    const addOne = () => {
        updateQty(id, qty + 1)
    }
    
    return (
        <div className="CartItem">
            <div>{name}</div>
            <div>$ {price}</div>
            <div>
                <button>-</button>
                {qty}
                <button onClick={addOne}>+</button>

            </div>
            <div>total: $ {qty * price}</div>

        </div>
    )


}

export default CartItem;
