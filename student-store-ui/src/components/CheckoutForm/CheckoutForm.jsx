import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm() {
  return (
    <div className="checkout-form">
      <h3 class>
        "Payment Info"
        <span class="button">
          <i class="material-icons md-48">monetization_on</i>
        </span>
      </h3>
      <div class="input-field">
        <label class="label">Name</label>
        <div class="control">
          <input
            name="name"
            class="checkout-form-input"
            type="text"
            placeholder="Student Name"
            value
          ></input>
        </div>
      </div>
      <div class="input-field">
        <label class="control">Email</label>
        <div class="control">
          <input
            name="email"
            class="checkout-form-input"
            type="email"
            placeholder="student@codepath.org"
            value
          ></input>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input name="termsAndConditions" type="checkbox"></input>
            <span class="label">
              "I agree to the "
              <a href="#terms-and-conditions">terms and conditions</a>
            </span>
          </label>
        </div>
        <p class="is-danger"></p>
      </div>
      <div class="field">
        <div class="control">
          <button class="button checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
}
