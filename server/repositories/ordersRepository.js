// repositories/ordersRepository.js
import { Order } from '../models/Order.js';
import { OrderItem } from '../models/OrderItem.js';
import { findPizzaByName } from './pizzasRepository.js';

const orders = []; // Almacenamiento temporal en memoria

// Crear un nuevo pedido con una lista de items [{ pizzaName, quantity }]
export const createOrder = (itemsData) => {
  const orderItems = [];

  for (const item of itemsData) {
    const pizza = findPizzaByName(item.pizzaName);
    if (!pizza) {
      throw new Error(`Pizza "${item.pizzaName}" no encontrada`);
    }

    const orderItem = new OrderItem(pizza, item.quantity);
    orderItems.push(orderItem);
  }

  const newOrder = new Order(orderItems);
  orders.push(newOrder);
  return newOrder;
};

// Obtener todos los pedidos
export const getAllOrders = () => orders;

// Obtener un pedido por ID
export const getOrderById = (id) =>
  orders.find((order) => order.id === parseInt(id));
