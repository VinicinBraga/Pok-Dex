import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoritesContext";
import logo from "../Logo/logo.png";
import "./style.css";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={logo} className="navbar-img" />
      </div>
      <div>{favoritePokemons.length} ❤️</div>
    </nav>
  );
};

export default Navbar;
