import * as React from "react";
import "./ProductView.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView(props) {
  console.log("Product accessed inside product view", product);
  return (
    <div className="view">
      <ProductCard
        showDescription={true}
        product={props.product}
        productId={props.productId}
      />
    </div>
  );
}
