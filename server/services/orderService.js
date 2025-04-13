// services/orderService.js
import { createOrder, getAllOrders, getOrderById } from '../repositories/ordersRepository.js';

export const fetchAllOrders = () => {
  return getAllOrders();
};

export const fetchOrderById = (id) => {
  const order = getOrderById(id);
  if (!order) {
    throw new Error(`Pedido con ID ${id} no encontrado`);
  }
  return order;
};

export const placeNewOrder = (items) => {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('El pedido debe contener al menos una pizza');
  }

  for (const item of items) {
    if (!item.pizzaName || typeof item.quantity !== 'number' || item.quantity <= 0) {
      throw new Error('Cada ítem debe tener un nombre de pizza válido y una cantidad mayor a 0');
    }
  }

  return createOrder(items);
};
