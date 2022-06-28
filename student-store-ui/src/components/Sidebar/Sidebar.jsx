import * as React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./Sidebar.css";

export default function Sidebar({
  handleOnToggle,
  isOpen,
  ShoppingCart,
  products,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  const arrow = isOpen ? "←" : "→";
  return (
    <section className="sidebar">
      <div className="sidenav" style={{ width: isOpen ? "600px" : "50px" }}>
        <div className="arrowbtn" onClick={handleOnToggle}>
          {arrow}
        </div>
        <div className="contents">
          <div className="cartbtn" onClick={handleOnToggle}>
            <i class="material-icons md-48">add_shopping_cart</i>
          </div>
          <div className="moneybtn" onClick={handleOnToggle}>
            <i class="material-icons md-48">monetization_on</i>
          </div>
          <div className="checkbtn" onClick={handleOnToggle}>
            <i class="material-icons md-48">fact_check</i>
          </div>
        </div>
      </div>
    </section>
  );
}
