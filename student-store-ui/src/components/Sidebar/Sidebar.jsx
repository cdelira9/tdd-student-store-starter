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
  return (
    <section className="sidebar">
      <div className="sidenav" style={{ width: isOpen ? "600px" : "50px" }}>
        <div className="closebtn" onClick={handleOnToggle}>
          &times;
        </div>
      </div>
    </section>
  );
}
