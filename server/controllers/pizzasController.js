// controllers/pizzasController.js
import { fetchAllPizzas } from '../services/pizzaService.js';

export const getPizzas = (req, res) => {
  try {
    const pizzas = fetchAllPizzas();
    res.status(200).json(pizzas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las pizzas', error: error.message });
  }
};
