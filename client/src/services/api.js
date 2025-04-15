// src/services/api.js.
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';
const API = axios.create({
  baseURL: baseUrl,
});

console.log(" API URL:", baseUrl);


export const getPizzas = async () => {
  const response = await API.get('/pizzas');
  return response.data;
};

export const postOrder = async (orderData) => {
  const response = await API.post('/orders', orderData);
  return response.data;
};

export const getOrderById = async (id) => {
  const response = await API.get(`/orders/${id}`);
  return response.data;
};
