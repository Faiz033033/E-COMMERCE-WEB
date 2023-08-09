import React from "react";
import './Header.css'

const Header = (props)=>{
    return(
        <>
            <div className="mainHeader">
            <nav className="navButtons">
                <button className="navButtonsNavigation">Home</button>
                <button className="navButtonsNavigation">Store</button>
                <button className="navButtonsNavigation">About</button>
                <button className="cartButton"><span>Cart</span><span className="cartCount">0</span></button>

            </nav>
            </div>
        </>
    )
};
export default Header;