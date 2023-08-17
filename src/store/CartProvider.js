import React, { useState, useContext, useEffect, useCallback } from "react";
import AuthContext from "./auth-context";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [addItems, setAddItems] = useState([]);
  const AuthCtx = useContext(AuthContext);

  let urlOfCrud = "https://crudcrud.com/api/9cefd253406d419c8870981127e4987b";
  let userIdentity = localStorage.getItem("email");

  const getDataFromCrud = useCallback(async () => {
    try {
      const response = await fetch(`${urlOfCrud}/${userIdentity}`);
      const result = await response.json();
      setAddItems(result);
      console.log("result", result);
    } catch (err) {
      alert(err);
    }
  }, [setAddItems, urlOfCrud, userIdentity]);

  const postDataToCrud = async (item) => {
    try {
      let alreadyExistsItem = addItems.find(
        (element) => element.id === item.id
      );
      if (alreadyExistsItem) {
        alert("Item already present");
      } else {
        const addToCrud = await fetch(`${urlOfCrud}/${userIdentity}`, {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("addToCrud", addToCrud); 
        console.log("Item added");
      }
    } catch (err) {
      console.log("Error", err);
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
  }, [AuthCtx.login, AuthCtx.logout, getDataFromCrud]);

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
