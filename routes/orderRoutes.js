import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController.js';

const router = express.Router();

// Create order
router.post('/', createOrder);

// Get all orders
router.get('/', getOrders);

export default router;
