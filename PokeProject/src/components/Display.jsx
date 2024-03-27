import { getAllPokemon } from "../utils/ApiCalls";
import { useState, useEffect } from "react";

const Display = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getAllPokemon();
      setPokemonList(data.results);
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      {pokemonList.map((pokemon) => {
        return (
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
            <p>{pokemon.game_indices}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
