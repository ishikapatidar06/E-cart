import React from "react";

import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItems";

// Import your CartItem component here

const Cart = () => {
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };

  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              imgSrc={item.imgSrc}
              name={item.name}
              price={item.price}
              qty={item.quantity}
              id={item.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet !!</h1>
        )}
      </main>

      <aside>
        <h2>Subtotal: ₹{subTotal}</h2>
        <h2>Shipping: ₹{shipping}</h2>
        <h2>Tax: ₹{tax}</h2>
        <h2>Total: ₹{total}</h2>
      </aside>
    </div>
  );
};

export default Cart;
