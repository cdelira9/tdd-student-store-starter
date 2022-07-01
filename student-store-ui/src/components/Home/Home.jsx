import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../ProductGrid/ProductGrid";
import Hero from "../Hero/Hero";
import "./Home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <nav class="sub-navbar">
        <div class="content">
          <div class="row">
            <div class="search-bar">
              <input type="text" name="search" placeholder="Search" value />
              <i class="material-icons">search</i>
            </div>
            <div class="links">
              <span class="help">
                <i class="material-icons">help</i>
                "Help"
              </span>
              <div class="cart">
                <a href="/">
                  "My Cart"
                  <i class="material-icons">shopping_cart</i>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="hamburger-menu">
              <i class="material=icons">menu</i>
            </div>
            <ul class="category-menu open">
              <li class="is-active">
                <button>All Categories</button>
              </li>
              <li class>
                <button>Clothing</button>
              </li>
              <li class>
                <button>Food</button>
              </li>
              <li class>
                <button>Accessories</button>
              </li>
              <li class>
                <button>Tech</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ProductGrid
        products={props.products}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart = {props.handleRemoveItemFromCart}
        shoppingCart = {props.ShoppingCart}
      />
      <div className="about" id="About">
        <div class="content">
          <h3>About</h3>
          <div class="summary">
            <div class="text">
              <p>
                The codepath student store offers great products at great prices
                from a great team and for a great cause
              </p>
              <p>
                We've searched far and wide for items that perk the interests of
                even the most eccentric students and decided to offer them all
                here in one place
              </p>
              <p>
                "All proceeds go towards bringing high quality CS education to
                college students around the country"
              </p>
            </div>
            <div class="media">
              <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg"></img>
            </div>
          </div>
        </div>
        <div class="Contact" id="Contact">
          <div class="content">
            <h3>Contact Us</h3>
            <div class="summary">
              <ul class="info">
                <li>
                  <span class="label">Email:</span>
                  <span>code@path.org</span>
                </li>
                <li>
                  <span class="label">Phone:</span>
                  <span>1-800-CODEPATH</span>
                </li>
                <li>
                  <span class="label">Address:</span>
                  <span>123 Fake Street, San Francisco, CA</span>
                </li>
                <li>
                  <span>Socials:</span>
                </li>
              </ul>
              <div class="media">
                <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" />
              </div>
            </div>
          </div>
          <div>
            <footer class="footer">
              <div class="content">
                <div class="top">
                  <div class="links">
                    <div class="link-column">
                      <h4>Categories</h4>
                      <ul>
                        <li>All Categories</li>
                        <li>Clothing</li>
                        <li>Food</li>
                        <li>Accessories</li>
                        <li>Tech</li>
                      </ul>
                    </div>
                    <div class="link-column">
                      <h4>Company</h4>
                      <ul>
                        <li>About Us</li>
                        <li>Find a Store</li>
                        <li>Terms</li>
                        <li>Sitemap</li>
                        <li>Careers</li>
                      </ul>
                    </div>
                    <div class="link-column">
                      <h4>Support</h4>
                      <ul>
                        <li>Contact Us</li>
                        <li>Money Refund</li>
                        <li>Order Status</li>
                        <li>Shipping Info</li>
                        <li>Open Dispute</li>
                      </ul>
                    </div>
                    <div class="link-column">
                      <h4>Account</h4>
                      <ul>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Account Setting</li>
                        <li>My Orders</li>
                      </ul>
                    </div>
                    <div class="link-column">
                      <h4>Socials</h4>
                      <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                      </ul>
                    </div>
                    <div class="link-column">
                      <h4>Our App</h4>
                      <ul>
                        <li>
                          <img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" />
                        </li>
                        <li>
                          <img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="bottom">
                  <span class="payment-options">
                    <img
                      src="https://codepath-student-store-demo.surge.sh/assets/american_express.40f242c7.svg"
                      alt="american express"
                    />
                    <img
                      src="https://codepath-student-store-demo.surge.sh/assets/mastercard.c75b7bc4.svg"
                      alt="mastercard"
                    />
                    <img
                      src="https://codepath-student-store-demo.surge.sh/assets/paypal.6a45b239.svg"
                      alt="paypal"
                    />
                    <img
                      src="https://codepath-student-store-demo.surge.sh/assets/visa.a818ddc4.svg"
                      alt="visa"
                    />
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
