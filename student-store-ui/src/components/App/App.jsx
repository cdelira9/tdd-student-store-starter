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
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [ShoppingCart, setShoppingCart] = useState([]);
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
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Sidebar
          handleOnToggle={handleOnToggle}
          isOpen={isOpen}
          products={products}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
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
