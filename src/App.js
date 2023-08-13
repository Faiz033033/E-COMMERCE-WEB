import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import PageSummary from "./UI/PageSummary";
import Store from "./Components/Store/Store";
import Footer from "./Layout/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Context/CartProvider";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";

function App() {
  const [cartClicked, setCartClicked] = useState(false);

  const cartDisplayHandler = () => {
    setCartClicked(true);
  };

  const cartDisplayHider = () => {
    setCartClicked(false);
  };

  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      key: Math.random().toString(),
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      key: Math.random().toString(),
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      key: Math.random().toString(),
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      key: Math.random().toString(),
    },
  ];

  return (
    <CartProvider>
      <Header onClose={cartDisplayHandler} />
      <Routes>
        <Route path="/Home" element={<Home />} key="home">
          <Route index element={<PageSummary />} />
          {cartClicked && <Cart onClose={cartDisplayHider} />}
        </Route>
        <Route
          path="/Store"
          element={<Store storeItems={productsArr} />}
          key="store"
        >
          <Route index element={<PageSummary />} />
          {cartClicked && <Cart onClose={cartDisplayHider} />}
        </Route>
        <Route path="/About" element={<About />} key="about">
          <Route index element={<div>{"Helper"}</div>} />
          {cartClicked && <Cart onClose={cartDisplayHider} />}
        </Route>
        <Route path="/Contact" element={<Contact />} key="contact" />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
