import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 = "https://m.media-amazon.com/images/I/51p-c5-VfFL._SX679_.jpg";
const img2 =
  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjSX_sJPGQ0G5GJF8gTSqLzLPa0HuyRkG8QBEjEZCyTXtWFV8EBK_8C0obG2kNUh4JpFxIRScEXL-SG23cR8LsPOOObO6jjBdZlZ-xqTj4fdOE8IZL1H6HeQ";
const img3 =
  "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2370105/2023/1/25/5ada0d90-ef3b-4003-91cb-ff41e0b6c1f81674641196444-DressBerry-Navy-Blue-Textured-Sling-Bag-9581674641195524-1.jpg";
const img4 =
  "https://www.gonoise.com/cdn/shop/products/Icon2-6_480x.png?v=1681610912";

const Home = () => {
  const productList = [
    {
      name: "Smart Phone",
      price: 8999,
      imgSrc: img1,
      id: "1",
    },
    {
      name: "Flats",
      price: 399,
      imgSrc: img2,
      id: "2",
    },
    {
      name: "Bag",
      price: 699,
      imgSrc: img3,
      id: "3",
    },
    {
      name: "Smart Watch",
      price: 1499,
      imgSrc: img4,
      id: "4",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };

  return (
    <div className="home">
      {productList.map((item) => (
        <ProductCard
          key={item.id}
          imgSrc={item.imgSrc}
          name={item.name}
          price={item.price}
          id={item.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>₹{price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
