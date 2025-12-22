const express = require('express');
const router = express.Router();
const controller = require('../controllers/order.controller');
const auth = require('../middleware/auth');

router.post('/', auth, controller.createOrder);
router.patch('/:id/status', auth, controller.updateOrderStatus);
router.delete('/:id', auth, controller.cancelOrder);
// server.js or routes/order.js

// Fetch all orders
router.get('/orders', authMiddleware, (req, res) => {
    res.status(200).json({ orders });
});

module.exports = router;
