// src/PokemonList.js
import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10') // You can adjust the limit as needed
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {pokemons.map((pokemon, index) => (
          <div className="col" key={index}>
            <PokemonCard
              name={pokemon.name}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              type="Unknown" // You can fetch and display the actual type
              abilities={['Ability 1', 'Ability 2']} // You can fetch and display the actual abilities
              <div className="btn-group">
                <button>load more</button>
                <button>read more</button>

         
          </div>
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
