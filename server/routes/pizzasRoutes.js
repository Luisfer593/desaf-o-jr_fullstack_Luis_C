// routes/pizzasRoutes.js
import express from 'express';
import { getPizzas } from '../controllers/pizzasController.js';

const router = express.Router();

router.get('/', getPizzas);

export default router;
