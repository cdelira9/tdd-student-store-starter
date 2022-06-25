import * as React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product, productId }) {


  console.log("product access inside product card: ", product)
  return (
    <div className="product-card">
      <div className="info">
        <Link to={"/products/" + productId}>
          <img src={product.image} />
        </Link>
        <p className="product-name">{product.name}</p>
        <p className="product-price"> {"$" + product.price}</p>
      </div>
    </div>
  );
}
