import * as React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "100px";
  }
  return (
    <section className="sidebar">
      <div id="arrow">
        <img src="" />
      </div>
      <p>Sidebar</p>
    </section>
  );
}
