import React from "react";
import "../Navbar/navbar.css";

function Navbar() {
  const pokeLogo =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav className="nav-main">
      <div>
        <img alt="pokemon-logo" src={pokeLogo} className="nav-img" />
      </div>
    </nav>
  );
}

export default Navbar;
