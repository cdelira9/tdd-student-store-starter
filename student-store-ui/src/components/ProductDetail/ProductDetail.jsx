import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductCard from "../ProductCard/ProductCard";
import ProductGrid from "../ProductGrid/ProductGrid";
import { Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetail.css";

import axios from "axios";

import ProductView from "/src/components/ProductView/ProductView";

export default function ProductDetail({ shoppingCart }) {
  /* products is a bunch of products from the innitial api call*/

  let { productId } = useParams();
  const [product, setProduct] = useState();

  const isLoading = !Boolean(product);

  console.log("Product empty? ", isLoading);

  const element = isLoading ? (
    "Loading.."
  ) : (
    <ProductView product={product} productId={2} />
  );

  console.log("isLoading or Success?: ", element);
  useEffect(async () => {
    console.log("UserId got from params: ", productId);

    const url = `https://codepath-store-api.herokuapp.com/store/`;

    const apiURL = url + productId;

    try {
      const response = await axios.get(apiURL);
      console.log("Product returned second api call", response.data.product);
      setProduct(response.data.product);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="productdetail">
      <Navbar />
      <Sidebar />
      <div className="box">{element}</div>
      {/* <ProductView product={product} productId={productId} /> */}
    </div>
  );
}
