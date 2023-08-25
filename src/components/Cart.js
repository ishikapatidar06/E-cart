import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

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

  return React.createElement(
    "div",
    { className: "cart" },
    React.createElement(
      "main",
      null,
      cartItems.length > 0
        ? cartItems.map((i) =>
            React.createElement(CartItem, {
              imgSrc: i.imgSrc,
              name: i.name,
              price: i.price,
              qty: i.quantity,
              id: i.id,
              key: i.id,
              decrement: decrement,
              increment: increment,
              deleteHandler: deleteHandler,
            })
          )
        : React.createElement("h1", null, "No Items Yet !!")
    ),

    React.createElement(
      "aside",
      null,
      React.createElement("h2", null, `Subtotal: ₹${subTotal}`),
      React.createElement("h2", null, `Shipping: ₹${shipping}`),
      React.createElement("h2", null, `Tax: ₹${tax}`),
      React.createElement("h2", null, `Total: ₹${total}`)
    )
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) =>
  React.createElement(
    "div",
    { className: "cartItem" },
    React.createElement("img", { src: imgSrc, alt: "Item" }),
    React.createElement(
      "article",
      null,
      React.createElement("h3", null, name),
      React.createElement("p", null, `₹${price}`)
    ),

    React.createElement(
      "div",
      null,
      React.createElement("button", { onClick: () => decrement(id) }, "-"),
      React.createElement("p", null, qty),
      React.createElement("button", { onClick: () => increment(id) }, "+")
    ),

    React.createElement(AiFillDelete, { onClick: () => deleteHandler(id) })
  );

export default Cart;
