import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import PizzaOrderPage from '../pages/PizzaOrderPage';
import * as api from '../services/api'; // 👈 importa tus funciones de API
import '@testing-library/jest-dom';

// Mockea la respuesta de getPizzas()
jest.mock('../services/api', () => ({
  getPizzas: jest.fn(),
}));

describe('PizzaOrderPage', () => {
  it('debería agregar pizzas al pedido y confirmar correctamente', async () => {
    // 👇 Configuramos la respuesta mock
    api.getPizzas.mockResolvedValue([
      { id: 1, name: 'Margarita', price: 10 },
      { id: 2, name: 'Pepperoni', price: 12 },
    ]);

    render(<PizzaOrderPage />);

    // Esperamos a que se rendericen las pizzas
    await waitFor(() => {
      expect(screen.getByText('Margarita')).toBeInTheDocument();
      expect(screen.getByText('Pepperoni')).toBeInTheDocument();
    });

    // Simula clic en "Agregar" (ajusta según el texto real de tu botón)
    fireEvent.click(screen.getAllByText('Agregar')[0]);

    // Verifica que el resumen de pedido tenga Margarita
    expect(screen.getByText(/Margarita\s*x\s*1/i)).toBeInTheDocument();
  });
});
