import * as React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function ProductCard( props ) {
  console.log("product access inside product card: ", props.product);
  return (
    <div className="product-card">
      <div className="info">
        <Link to={"/products/" + props.productId}>
          <img src={props.product.image} />
        </Link>
      </div>
      <div className="product-info">
        <p className="product-name">{props.product.name}</p>
        <p className="product-price"> {"$" + props.product.price}</p>
      </div>

      <div className="actions">
        <div className="buttons">
          <button
            className="add"
            onClick={() => props.handleAddItemToCart(props.product.id)}
          >
            {" "}
            <i className="material-icons">add</i>
          </button>
          <button
            className="add"
            onClick={() => props.handleRemoveItemFromCart(props.product.id)}
          >
            {" "}
            <i className="material-icons">remove</i>
          </button>
        </div>
      </div>
    </div>
  );
}
