import * as React from "react";
import Logo from "../logo/logo";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo/>
      <a href="Home">Home</a>
      <a href="About">About Us</a>
      <a href="http://localhost:3001/">Contact Us</a>
      <a href="http://localhost:3001/">Buy Now</a>
    </nav>
  );
}
