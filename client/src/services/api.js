// src/services/api.js
import axios from 'axios';

// Establece la URL base desde variables de entorno o usa localhost por defecto
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

console.log("API URL:", baseURL); // Útil para verificar en consola si se carga bien

const API = axios.create({
  baseURL,
});

// Obtener todas las pizzas
export const getPizzas = async () => {
  const response = await API.get('/pizzas');
  return response.data;
};

// Enviar una orden de pedido
export const postOrder = async (orderData) => {
  const response = await API.post('/orders', orderData);
  return response.data;
};

// Obtener una orden por su ID
export const getOrderById = async (id) => {
  const response = await API.get(`/orders/${id}`);
  return response.data;
};
