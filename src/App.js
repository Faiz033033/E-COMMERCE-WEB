import { useState } from "react";
import Header from "./Components/Layout/Header";
import PageSummary from "./Components/UI/PageSummary";
import Store from "./Components/Store/Store";
import Footer from "./Components/Layout/Footer";
import Cart from './Components/Cart/Cart'

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
    <>
      <Header onClose={cartDisplayHandler}></Header>
      <PageSummary></PageSummary>
      <Store storeItems={productsArr}></Store>
      <Footer></Footer>
      {cartClicked && <Cart onClose={cartDisplayHider}></Cart>}
    </>
  );
}

export default App;
