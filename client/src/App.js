// src/App.js
import React from 'react';
import PizzaOrderPage from './pages/PizzaOrderPage';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Pizzería Online</h1>
      <PizzaOrderPage />
    </div>
  );
};

export default App;
