import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // <-- ¡Importante!
import PizzaList from '../components/PizzaList';
import React from 'react';

const mockPizzas = [
  { id: 1, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella'] },
  { id: 2, name: 'Diavola', price: 7.5, ingredients: ['tomato', 'spicy salami'] },
];  

test('renderiza lista de pizzas correctamente', () => {
  render(<PizzaList pizzas={mockPizzas} onAdd={() => {}} />);
  expect(screen.getByText('Margherita')).toBeInTheDocument();
  expect(screen.getByText('Diavola')).toBeInTheDocument();
});

test('ejecuta onAdd al hacer clic en "Agregar"', () => {
  const handleAdd = jest.fn();
  render(<PizzaList pizzas={mockPizzas} onAdd={handleAdd} />);
  fireEvent.click(screen.getAllByText('Agregar')[0]);
  expect(handleAdd).toHaveBeenCalledTimes(1);
});
