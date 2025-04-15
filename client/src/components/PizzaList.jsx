// src/components/PizzaList.jsx

import React from 'react';
import './PizzaList.css';

const PizzaList = ({ pizzas, onAdd }) => {
  return (
    <div className="pizza-container">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="pizza-card">
          <h3 className="pizza-title">{pizza.name}</h3>
          <p className="pizza-ingredients">
            {Array.isArray(pizza.ingredients) ? pizza.ingredients.join(', ') : 'Sin ingredientes'}
          </p>
          <p className="pizza-price">${pizza.price.toFixed(2)}</p>
          <button className="add-button" onClick={() => onAdd(pizza)}>
            Agregar
          </button>
        </div>
      ))}
    </div>
  );
};

export default PizzaList;
