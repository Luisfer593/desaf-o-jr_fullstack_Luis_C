// repositories/pizzasRepository.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Pizza } from '../models/pizza.js';
2
// Necesario para __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer y convertir las pizzas desde el JSON
const pizzasData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../example_pizzas.json'), 'utf-8')
);

// Convertir cada objeto JSON en una instancia de Pizza
const pizzas = pizzasData.map(
  ({ name, price, ingredients }) => new Pizza(name, price, ingredients)
);

// Funciones que exportaremos
export const getAllPizzas = () => pizzas;

export const findPizzaByName = (name) =>
  pizzas.find((pizza) => pizza.name.toLowerCase() === name.toLowerCase());
