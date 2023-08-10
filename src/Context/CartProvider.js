import { useState } from "react";
import CartContext from "./cart-contetxt";
const CartProvider = props =>{
    let [isItems, setIsItems] = useState([]);
    const addItemHandler= (item)=>{
        const filteredList = isItems.filter((lst)=>lst.title===item.title);
        if(filteredList.length!=0){
            isItems.forEach(itm=>{ 
                if(itm.title==filteredList[0].title){
                    itm.quantity+=1;
                }
            })
            setIsItems([...isItems])
        }
        else{ setIsItems([...isItems, item])};
       
    };
    console.log(isItems)

    const removeItemHandler = (item)=>{
        return;
    };
    const cartContext = {
        items:isItems,
        totalAMount:0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>

    );

};

export default CartProvider;