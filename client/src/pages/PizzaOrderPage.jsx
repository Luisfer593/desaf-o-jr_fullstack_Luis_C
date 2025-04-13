import React, { useEffect, useState } from 'react';
import { getPizzas, postOrder } from '../services/api';
import PizzaList from '../components/PizzaList';
import OrderSummary from '../components/OrderSummary';
import './PizzaOrderPage.css';  // Importamos los estilos

const PizzaOrderPage = () => {
  const [pizzas, setPizzas] = useState([]);
  const [order, setOrder] = useState([]);
  const [message, setMessage] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState([]);  // Nuevo estado

  useEffect(() => {
    getPizzas().then(setPizzas);
  }, []);

  const addToOrder = (pizza) => {
    setOrder((prev) => {
      const existing = prev.find((item) => item.pizzaName === pizza.name);
      if (existing) {
        return prev.map((item) =>
          item.pizzaName === pizza.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { pizzaName: pizza.name, quantity: 1 }];
    });
  };

  const removeFromOrder = (pizzaName) => {
    setOrder((prev) =>
      prev
        .map((item) =>
          item.pizzaName === pizzaName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const confirmOrder = async () => {
    try {
      await postOrder({ items: order });
      setConfirmedOrder(order);      // Guardamos el pedido confirmado
      setMessage(' Su pedido está confirmado.');
      setOrder([]);                  // Limpiamos el carrito
    } catch (error) {
      setMessage(' Error al confirmar el pedido.');
    }
  };

  return (
    <div className="pizza-order-page">
      <div className="order-section">
        <PizzaList pizzas={pizzas} onAdd={addToOrder} />
        <OrderSummary order={order} onConfirm={confirmOrder} onRemove={removeFromOrder} />
      </div>

        {message && (
        <div className="confirmation-message">
            <h2>{message}</h2>
            {confirmedOrder.length > 0 && (
            <table className="confirmed-order-table">
                <thead>
                <tr>
                    <th>Pizza</th>
                    <th>Cantidad</th>
                </tr>
                </thead>
                <tbody>
                {confirmedOrder.map((item) => (
                    <tr key={item.pizzaName}>
                    <td>{item.pizzaName}</td>
                    <td>{item.quantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </div>
        )}

    </div>
  );
};

export default PizzaOrderPage;
