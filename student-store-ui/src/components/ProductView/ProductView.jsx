import * as React from "react";
import "./ProductView.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView({ product, productId, quantity }) {
  console.log("Product accessed inside product view", product);
  return (
    <div className="view">
      <ProductCard
        showDescription={true}
        product={product}
        productId={productId}
      />
    </div>
  );
}
