import React, { useState } from "react";
import "../Searchbar/searchbar.css";

function Searchbar() {
  const [search, setSearch] = useState("Teste");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleclick = () => {
    console.log(search);
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
        <button className="searchbar-btn" onClick={handleclick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
