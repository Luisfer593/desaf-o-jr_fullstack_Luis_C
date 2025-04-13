import { getPizzas } from '../services/pizzasService.js';

describe('pizzasService', () => {
  test('debería retornar una lista de pizzas', () => {
    const pizzas = getPizzas();
    expect(Array.isArray(pizzas)).toBe(true);
    expect(pizzas.length).toBeGreaterThan(0);
    expect(pizzas[0]).toHaveProperty('name');
    expect(pizzas[0]).toHaveProperty('price');
    expect(pizzas[0]).toHaveProperty('ingredients');
  });
});
