import React from "react";
import Card from '../UI/Card'
import "./Cart.css";

const Cart = (Props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  const cartItems = (
    <ul>
      <span className="cartHeader">
        <span className="Item">ITEM</span>
        <span className="Price">PRICE</span>
        <span className="Quantity">QUANTITY</span>
      </span>
      {cartElements.map((item) => (
        <li className="singleList">
          <img src={item.imageUrl} alt="Album" className="cartImages" />
          {item.title}
          {item.price}
          {item.quantity}
          <button className="removeButton">Remove</button>
        </li>
      ))}
    </ul>
  );

  

  return (
    <Card>
      <div className="cartName">CART</div>
      <button className="closeCart" onClick={Props.onClose}>
        Close
      </button>
      {cartItems}
    </Card>
  );
};

export default Cart;
