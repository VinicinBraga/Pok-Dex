import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex/index";
import { getPokemon } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setpokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const result = await getPokemon();
      setpokemons(result);
      setLoading(false);
    } catch (error) {
      console.log(` fetchPokemons error= ${error}`);
    }
  };

  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
