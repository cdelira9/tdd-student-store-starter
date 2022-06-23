import * as React from "react";
import Logo from "../logo/logo";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <p>Navbar</p>
    </nav>
  );
}
