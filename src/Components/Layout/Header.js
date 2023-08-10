import React, { useContext } from "react";
import CartContext from "../../Context/cart-contetxt"
import { Link } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <div className="mainHeader">
        <nav className="navButtons">
          <button className="navButtonsNavigation">Home</button>
          <Link to="/Store" className="navButtonsNavigation">
            Store
          </Link>
          <Link to="/About" className="navButtonsNavigation">
            About
          </Link>
          <button className="cartButton" onClick={props.onClose}>
            <span>Cart</span>
            <span className="cartCount">
              {cartCtx.items.reduce((accumulator, curItem) => {
                return accumulator + curItem.quantity;
              }, 0)}
            </span>
          </button>
        </nav>
      </div>
    </>
  );
};
export default Header;
