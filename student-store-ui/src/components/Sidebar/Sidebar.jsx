import * as React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidebar({
  handleOnToggle,
  isOpen,
  products,
  shoppingCart,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleAddItemToCart,
  handleRemoveItemToCart,
  checkoutForm,
  setShoppingCart,
  subtotal,
  cartSize,
  setSubtotal,
}) {
  const arrow = isOpen ? "←" : "→";
  return (
    <section className="sidebar">
      <section className="sidenav" style={{ width: isOpen ? "600px" : "50px" }}>
        <div className="allitems">
          <div className={isOpen ? "←" : "→"} onClick={handleOnToggle}>
            <i class="material-icons md-48">{arrow}</i>
          </div>
          <div className={isOpen ? "closedIcon open" : "closedIcon closed"}>
            <i className="material-icons md-48">add_shopping_cart</i>
          </div>
          <div className={isOpen ? "closedIcon open" : "closedIcon closed"}>
            <i className="material-icons md-48">monetization_on</i>
          </div>
          <div className={isOpen ? "closedIcon open" : "closedIcon closed"}>
            <i className="material-icons md-48">fact_check</i>
          </div>
        </div>
        <ShoppingCart
          isOpen={isOpen}
          shoppingCart={shoppingCart}
          products={products}
          subtotal={subtotal}
          cartSize={cartSize}
        />
        <CheckoutForm />
      </section>
    </section>
  );
}
