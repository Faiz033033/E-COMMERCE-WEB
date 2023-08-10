import React, { useContext } from "react";
import Card from "../UI/Card"
import './Cart.css'
import CartContext from "../../Context/cart-contetxt";

const Cart = (Props)=>{
    const cartCtx = useContext(CartContext);
     const cartItems = <ul className="mainUl">
                 <span className="cartHeader">
                    <span className="tpq">ITEM</span>
                    <span className="tpq">PRICE</span>
                    <span className="tpq">QUANTITY</span>
                </span>
            {cartCtx.items.map(item=>(

                <li key={Math.random().toString()} className="singleList">
                    <img src={item.imageUrl} alt="Album Image" className="cartImages" />
                    <div className="tpq1">{item.title}</div>
                    <div className="tpq1">{item.price}</div>
                    <div className="tpq1">{item.quantity}</div>
                    <button className="removeButton">Remove</button>
                </li>

            ))}
        </ul>

        return(
            <Card >
                <div className="cartName">CART</div>
                <button className="closeCart" onClick={Props.onClose}>X</button>
                {cartItems}
                <div className="totalCost">
                    <div className="totalCostText">
                        Total Cost: Rs {' '}{cartCtx.items.reduce((accumulator, curItem)=>{return accumulator + (curItem.quantity*curItem.price)},0)}
                    </div>
      
                </div>
            </Card>
        )
}

export default Cart;