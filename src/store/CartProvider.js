import React, { useState, useContext, useEffect } from "react";
import AuthContext from "./auth-context";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [addItems, setAddItems] = useState([]);
  const AuthCtx = useContext(AuthContext);

  let urlOfCrud = "https://crudcrud.com/api/a3107ab62f564c949874691153508bb8";
  let userIdentity = localStorage.getItem("email");

  const getDataFromCrud = async () => {
    try {
      const response = await fetch(`${urlOfCrud}/${userIdentity}`);
      const result = await response.json();
      setAddItems(result);
      console.log("result", result);
    } catch (err) {
      alert(err);
    }
  };
  const postDataToCrud = async (item) => {
    try {
      let alreadyExistsItem = addItems.find(
        (element) => element.id === item.id
      );
      if (alreadyExistsItem) {
        alert("item already present");
      } else {
        const addToCrud = await fetch(`${urlOfCrud}/${userIdentity}`, {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("addToCrud", addToCrud); 
        console.log("added");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  const deleteDataFromCrud = async (id) => {
    try {
      const response = await fetch(`${urlOfCrud}/${userIdentity}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("responsedelete", response);
      getDataFromCrud();
    } catch (err) {
      alert(err);
    }
  };

  const addItemToCart = (item) => {

    postDataToCrud(item);
    console.log("item", item);
    getDataFromCrud();
  };
  const removeItemFromCart = (item) => {
    console.log("item._id", item._id);
    deleteDataFromCrud(item._id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataFromCrud();
      console.log("from useEffectcalled", data);
    };
    console.log("useeffectcalled");
    fetchData();
  }, [AuthCtx.login, AuthCtx.logout]);

  const cartContext = {
    items: addItems,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;