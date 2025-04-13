import React, { useState } from 'react';
import { getOrderById } from '../services/api';
import './OrderSummary.css';

const OrderSummary = ({ order, onConfirm, onRemove }) => {
  const [searchId, setSearchId] = useState('');
  const [searchedOrder, setSearchedOrder] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const total = order.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearch = async () => {
    if (!searchId) return;

    setHasSearched(true);
    try {
      const foundOrder = await getOrderById(searchId);
      setSearchedOrder(foundOrder);
    } catch (error) {
      console.error('Error al buscar el pedido:', error);
      setSearchedOrder(null);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchId(value);

    // Si se borra el input, limpiamos los resultados
    if (value.trim() === '') {
      setSearchedOrder(null);
      setHasSearched(false);
    }
  };

  return (
    <div className="order-summary">
      <h2>Resumen del Pedido</h2>
      
      <div className="search-section">
        <input
          type="text"
          value={searchId}
          onChange={handleInputChange}
          placeholder="Ingresa el ID del pedido"
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {hasSearched && (
        <div className="search-result">
          {searchedOrder ? (
            <div className="searched-order">
              <h4>Pedido Encontrado:</h4>
              <p>Pizza: {searchedOrder.items.map(item => item.pizza.name).join(', ')}</p>
              <p>Cantidad: {searchedOrder.items.map(item => item.quantity).join(', ')}</p>
              <p>ID del Pedido: {searchedOrder.id}</p>
            </div>
          ) : (
            <p className="not-found">No se encontró el pedido con ese ID.</p>
          )}
        </div>
      )}

      {order.length === 0 ? (
        <p className="empty-cart"></p>
      ) : (
        <div>
          <ul>
            {order.map((item) => (
              <li key={item.pizzaName} className="order-item">
                {item.pizzaName} x {item.quantity}Unidad(es)
                <button 
                  className="delete-button"
                  onClick={() => onRemove(item.pizzaName)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={onConfirm}
            className="confirm-button"
          >
            Confirmar Pedido Total: ({total} Unidades)
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
