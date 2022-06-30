import * as React from "react";
import "./ProductGrid.css";
// import "../ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid(props) {
  console.log("This is the products ", props.products);
  return (
    <div className="product-grid">
      {props.products.map((product, idx) => {
        console.log("test map function");
        return <ProductCard product={product} productId={product.id} />;
      })}
    </div>
  );
}
