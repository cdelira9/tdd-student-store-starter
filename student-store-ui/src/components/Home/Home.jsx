import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./Home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <p>Home</p>
      <ProductGrid />
    </div>
  );
}
