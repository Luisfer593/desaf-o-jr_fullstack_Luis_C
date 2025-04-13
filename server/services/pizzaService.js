// services/pizzaService.js
import { getAllPizzas, findPizzaByName } from '../repositories/pizzasRepository.js';

// Devuelve todas las pizzas disponibles
export const fetchAllPizzas = () => {
  return getAllPizzas();
};

// Busca una pizza por nombre (puede usarse para validaciones)
export const getPizzaByName = (name) => {
  const pizza = findPizzaByName(name);
  if (!pizza) {
    throw new Error(`La pizza "${name}" no fue encontrada`);
  }
  return pizza;
};
