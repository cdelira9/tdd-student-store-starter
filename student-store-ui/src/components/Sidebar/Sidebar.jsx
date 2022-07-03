import * as React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidebar(props) {
  const arrow = props.isOpen ? "←" : "→";
  return (
    <section className="sidebar">
      <section
        className="sidenav"
        style={{ width: props.isOpen ? "600px" : "50px" }}
      >
        <div className="allitems">
          <div className={props.isOpen ? "←" : "→"} onClick={props.handleOnToggle}>
            <i class="material-icons md-48">{arrow}</i>
          </div>
          <div
            className={props.isOpen ? "closedIcon open" : "closedIcon closed"}
          >
            <i className="material-icons md-48">add_shopping_cart</i>
          </div>
          <div
            className={props.isOpen ? "closedIcon open" : "closedIcon closed"}
          >
            <i className="material-icons md-48">monetization_on</i>
          </div>
          <div
            className={props.isOpen ? "closedIcon open" : "closedIcon closed"}
          >
            <i className="material-icons md-48">fact_check</i>
          </div>
        </div>
        <ShoppingCart
          isOpen={props.isOpen}
          shoppingCart={props.shoppingCart}
          products={props.products}
          subtotal={props.subtotal}
          cartSize={props.cartSize}
        />
        <CheckoutForm
          handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
          handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
          isOpen={props.isOpen}
          shoppingCart={props.shoppingCart}
          checkoutForm={props.checkoutForm}
          setShoppingCart={props.setShoppingCart}
        />
      </section>
    </section>
  );
}
