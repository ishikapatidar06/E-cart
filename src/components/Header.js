import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return React.createElement(
    "nav",
    null,
    React.createElement("h2", null, "Shopping cart"),

    React.createElement(
      "div",
      null,
      React.createElement(Link, { to: "/" }, "Home"),
      React.createElement(
        Link,
        { to: "/cart" },
        React.createElement(FiShoppingBag, null),
        React.createElement("p", null, cartItems.length)
      )
    )
  );
};

export default Header;
