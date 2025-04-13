import {
    createOrder,
    getOrders,
    getOrderById,
  } from '../services/ordersService.js';
  
  describe('ordersService', () => {
    beforeEach(() => {
      // limpiar pedidos antes de cada test (si usas array en memoria)
      while (getOrders().length) {
        getOrders().pop();
      }
    });
  
    test('debería crear un pedido', () => {
      const orderData = {
        items: [
          { pizzaName: 'Margherita', quantity: 2 },
          { pizzaName: 'Diavola', quantity: 1 },
        ],
      };
  
      const newOrder = createOrder(orderData);
      expect(newOrder).toHaveProperty('id');
      expect(newOrder.items.length).toBe(2);
    });
  
    test('debería devolver un pedido por ID', () => {
      const orderData = {
        items: [{ pizzaName: 'Bufala', quantity: 1 }],
      };
  
      const newOrder = createOrder(orderData);
      const fetchedOrder = getOrderById(newOrder.id);
  
      expect(fetchedOrder).toBeDefined();
      expect(fetchedOrder.id).toBe(newOrder.id);
    });
  
    test('debería retornar undefined si no existe el pedido', () => {
      const fetchedOrder = getOrderById(9999);
      expect(fetchedOrder).toBeUndefined();
    });
  });
  