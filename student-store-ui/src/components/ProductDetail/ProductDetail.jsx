import * as React from "react";
import "./ProductDetail.css";
import NotFound from "../NotFound/NotFound";
import ProductView from "../ProductView/ProductView";
import ProductCard from "../ProductCard/ProductCard";
import Hero from "../Hero/Hero";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function ProductDetail(props) {
  const [product, setProduct] = useState(null);
  let { productId } = useParams();

  useEffect(async () => {
    console.log("before fetching url");
    let url = `http://localhost:3001/store/` + productId;
    console.log(url);

    try {
      let response = await axios.get(url);
      console.log("response", response);
      let responseData = response.data.product;
      console.log("data", responseData);

      setProduct(responseData);
      console.log("setProduct", { product });
    } catch (e) {
      console.log(e);
    }
  }, []);
  if (product === null) {
    return <NotFound />;
  }

  return (
    <div className="product-detail">
      <ProductCard
        product={product}
        productId={product.id}
        // quantity={
        //   props.shoppingCart.find((item) => item.itemId === product.id)
        //     ? props.shoppingCart.find((item) => item.itemId === product.id)
        //         .quantity
        //     : null
        // }
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
        showDescription={props.showDescription}
      />
    </div>
  );
}
