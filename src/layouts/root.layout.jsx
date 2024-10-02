import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../pages/home/components/Footer";
import { CartContext } from "../context/cartContext";

function RootLayout() {
  const [cart, setCart] = useState([]);

  const updateCart = (product) => {
    if (cart.find((el) => product._id === el._id)) {
      //product is already in cart
      setCart(
        cart.map((el) =>
          el._id === product._id ? { ...el, count: el.count + 1 } : el
        )
      );
      return;
    }

    setCart([...cart, { ...product, count: 1 }]);
    return;
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart: cart, updateCart: updateCart, clearCart: clearCart }}
    >
      <main>
        <Navigation />
        <div className=" py-3 px-5 lg:py-4 lg:px-16 ">
          <Outlet />
        </div>
        <Footer />
      </main>
    </CartContext.Provider>
  );
}

export default RootLayout;
