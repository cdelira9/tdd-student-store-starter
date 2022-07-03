import * as React from "react";
import "./ProductView.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView(props) {
  console.log("Product accessed inside product view", product);
  return (
    <div className="view">
      <ProductCard
        quantity={props.quantity}
        productId={props.product.id}
        product={props.product}
        shoppingCart={props.shoppingCart}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        showDescription={true}
        key={props.productId}
      />
    </div>
  );
}
