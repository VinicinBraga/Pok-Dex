import React, { useState } from "react";
import "./style.css";
import { searchPokemon } from "../../api";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
    console.log(result);
  };

  const handleClick = () => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          className="searchbar-input"
          placeholder="Serch a Pokemon"
          onChange={handleSearch}
        ></input>
      </div>
      <div>
        <button className="searchbar-btn" onClick={handleClick}>
          Search
        </button>
      </div>
      {pokemon ? (
        <div>
          <div>Nome: {pokemon.name}</div>
          <div>Peso: {pokemon.weight}</div>
          <img src={pokemon.sprites.front_default} alt="pokemon img"></img>
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
