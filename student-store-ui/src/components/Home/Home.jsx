import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../ProductGrid/ProductGrid";
import Hero from "../Hero/Hero";
import "./Home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <Hero />
      <ProductGrid products={props.products} />
    </div>
  );
}
