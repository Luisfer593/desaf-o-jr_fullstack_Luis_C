// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api', // Aquí apuntas correctamente al backend
});

export const getPizzas = async () => {
  const response = await API.get('/pizzas');
  return response.data;
};

export const postOrder = async (orderData) => {
  const response = await API.post('/orders', orderData);
  return response.data;
};

// Modificada la función para obtener un pedido por ID
export const getOrderById = async (id) => {
  const response = await API.get(`/orders/${id}`); // Ruta para obtener un pedido por su ID
  return response.data;
};
