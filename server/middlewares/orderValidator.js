// middlewares/orderValidator.js
import { body, validationResult } from 'express-validator';

export const validateOrder = [
  body('items')
    .isArray({ min: 1 })
    .withMessage('El pedido debe contener al menos un ítem'),

  body('items.*.pizzaName')
    .notEmpty()
    .withMessage('Cada ítem debe tener el nombre de la pizza'),

  body('items.*.quantity')
    .isInt({ min: 1 })
    .withMessage('La cantidad debe ser al menos 1'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
