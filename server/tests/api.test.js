import request from 'supertest';
import app from '../app.js';

describe('API de pedidos', () => {
  test('GET /api/pizzas debe retornar 200 y una lista', async () => {
    const res = await request(app).get('/api/pizzas');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/orders debe crear un pedido', async () => {
    const order = {
      items: [
        { pizzaName: 'Romana', quantity: 1 },
      ],
    };

    const res = await request(app).post('/api/orders').send(order);
    expect(res.statusCode).toBe(201);
    expect(res.body.order).toHaveProperty('id');

  });

  test('POST /api/orders con datos inválidos debe retornar error', async () => {
    const res = await request(app).post('/api/orders').send({
      items: [
        { pizzaName: '', quantity: 0 }
      ]
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.errors).toBeDefined();
  });
});
