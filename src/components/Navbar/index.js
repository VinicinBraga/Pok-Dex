import React from "react";
import logo from "../Logo/logo.png";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="nav-main">
      <div>
        <img alt="pokemon-logo" src={logo} className="nav-img" />
      </div>
    </nav>
  );
};

export default Navbar;
