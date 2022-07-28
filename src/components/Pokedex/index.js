import React from "react";
import "./style.css";

function Pokedex({ pokemons, loading }) {
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>Paginação:</div>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, index) => {})}
        </div>
      )}
    </div>
  );
}

export default Pokedex;
