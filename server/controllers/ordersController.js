// controllers/ordersController.js
import {
    fetchAllOrders,
    fetchOrderById,
    placeNewOrder
  } from '../services/orderService.js';
  
  export const getOrders = (req, res) => {
    try {
      const orders = fetchAllOrders();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los pedidos', error: error.message });
    }
  };
  
  export const getOrderByIdController = (req, res) => {
    try {
      const { id } = req.params;
      const order = fetchOrderById(id); 
      if (!order) {
        return res.status(404).json({ message: `Pedido con ID ${id} no encontrado` });
      }
      res.status(200).json(order);  
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  
  export const createOrder = (req, res) => {
    try {
      const { items } = req.body;
      const newOrder = placeNewOrder(items);
      res.status(201).json({
        message: 'Su pedido está confirmado.',
        order: newOrder
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  