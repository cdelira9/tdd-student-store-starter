import * as React from "react";
import Logo from "../logo/logo";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="contents">
        <div class="logo">
          <a href="/">
            <img
              src="	https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
              alt="codepath logo"
            ></img>
          </a>
        </div>
        <div class="socials">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <a href="https://twitter.com" class="fa fa-twitter"></a>
          <a href="https://instagram.com" class="fa fa-instagram"></a>
          <a href="https://facebook.com" class="fa fa-facebook"></a>
        </div>
        {/* <div className="logo">
          <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" />
        </div> */}
        <ul class="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#About">About Us</a>
          </li>
          <li>
            <a href="/#Contact">Contact Us</a>
          </li>
          <li>
            <a href="/#Buy">Buy Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
