import * as React from "react";
import "./ProductGrid.css";
import "../ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid(props) {
  return (
    <div className="product-grid">
      {props.products.map((product, idx) => {
        return <ProductCard product={product} productId={product.id} />;
      })}
    </div>
  );
}
