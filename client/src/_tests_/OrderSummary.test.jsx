import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // <-- ¡Importante!
import OrderSummary from '../components/OrderSummary';
import React from 'react';

const mockOrder = [
  { pizzaName: 'Margherita', quantity: 2 },
  { pizzaName: 'Diavola', quantity: 1 },
];

test('muestra resumen del pedido', () => {
  render(<OrderSummary order={mockOrder} onConfirm={() => {}} />);
  
  // Usamos expresiones regulares para mayor flexibilidad
  expect(screen.getByText(/Margherita\s*x\s*2/i)).toBeInTheDocument();
  expect(screen.getByText(/Diavola\s*x\s*1/i)).toBeInTheDocument();
});

test('confirma pedido al hacer clic en el botón', () => {
  const handleConfirm = jest.fn();
  render(<OrderSummary order={mockOrder} onConfirm={handleConfirm} />);
  fireEvent.click(screen.getByText(/confirmar pedido/i));
  expect(handleConfirm).toHaveBeenCalled();
});
