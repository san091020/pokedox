// src/PokemonCard.js
import React from 'react';

const PokemonCard = ({ name, image, type, abilities }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Type:</strong> {type}
        </p>
        <p className="card-text">
          <strong>Abilities:</strong> {abilities.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
