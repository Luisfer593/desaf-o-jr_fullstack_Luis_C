// app.js
import express from 'express';
import pizzasRoutes from '../routes/pizzasRoutes.js';
import ordersRoutes from '../routes/ordersRoutes.js';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/pizzas', pizzasRoutes);
app.use('/api/orders', ordersRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API de la pizzería funcionando 🍕');
});

export default app;
