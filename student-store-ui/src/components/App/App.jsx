import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";
import Home from "../Home/Home";
import axios from "axios";
import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [products, setProducts] = useState("");
  async function getProducts() {
    try {
      const response = await axios.get(
        " https://codepath-store-api.herokuapp.com/store"
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  getProducts();
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="navbar" element={<Navbar />} />
            <Route path="sidebar" element={<Sidebar />} />
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
