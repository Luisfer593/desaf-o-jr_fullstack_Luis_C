// routes/ordersRoutes.js
// routes/ordersRoutes.js
import express from 'express';
import {
  getOrders,
  getOrderByIdController,
  createOrder
} from '../controllers/ordersController.js';
import { validateOrder } from '../middlewares/orderValidator.js';

const router = express.Router();

router.get('/', getOrders);
router.get('/:id', getOrderByIdController);
router.post('/', validateOrder, createOrder); // 👈 validación aquí

export default router;


/*
import express from 'express';
import {
  getOrders,
  getOrderByIdController,
  createOrder
} from '../controllers/ordersController.js';

const router = express.Router();

router.get('/', getOrders);              // /api/orders
router.get('/:id', getOrderByIdController); // /api/orders/:id
router.post('/', createOrder);           // /api/orders

export default router;*/
