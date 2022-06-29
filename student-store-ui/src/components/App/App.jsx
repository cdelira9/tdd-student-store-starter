import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [isOpen, setIsOpen] = useState(null);
  const [products, setProducts] = useState([]);
  const [ShoppingCart, setShoppingCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "" });
  const [isFetching, setIsFetching] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
        console.log("response", response);
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }

      console.log(products);
    }
    getProducts();
  }, []);

  const handleOnToggle = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleAddItemToCart = (productId) => {
    var newItem;
    var newCart = [];

    for (var i = 0; i < ShoppingCart.length; i++) {
      if (ShoppingCart[i].itemId === productId) {
        ShoppingCart[i].quantity++;
        setShoppingCart([...ShoppingCart]);
        var tempPrice =
          products.find((item) => item.id === productId).price + subtotal;
        setSubtotal(tempPrice);

        return;
      }
    }
    setShoppingCart([newItem, ...ShoppingCart]);
    var tempPrice =
      products.find((item) => item.id === productId).price + subtotal;
    setSubtotal(tempPrice);
  };

  const handleRemoveItemFromCart = (productId) => {};

  const handleOnCheckoutFormChange = (name, value) => {};
  const handleOnSubmitCheckoutForm = () => {};

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Sidebar
          handleOnToggle={handleOnToggle}
          isOpen={isOpen}
          products={products}
          ShoppingCart={ShoppingCart}
          handleOnCheckoutFormChange={handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          checkoutForm={checkoutForm}
          setShoppingCart={setShoppingCart}
          subtotal={subtotal}
          cartSize={ShoppingCart.length}
          setSubtotal={setSubtotal}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  ShoppingCart={ShoppingCart}
                  isOpen={isOpen}
                  products={products}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                  handleOnToggle={handleOnToggle}
                  checkoutForm={checkoutForm}
                  subtotal={subtotal}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* YOUR CODE HERE! */}
          {/* <Navbar />
          <Sidebar />
          <Home /> */}
        </main>
      </BrowserRouter>
    </div>
  );
}
