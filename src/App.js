// src/App.js
import React from 'react';
import './App.css';
import PokemonList from './PokemonList';

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3">Simple Pokemon App</h1>
      <PokemonList />
    </div>
  );
}

export default App;
