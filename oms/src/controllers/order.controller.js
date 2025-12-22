// src/controllers/order.controller.js
const service = require('../services/order.service');

exports.createOrder = async (req, res) => {
  try {
    const { userId, items } = req.body;
    const orderId = await service.createOrder(userId, items);
    res.status(201).json({ orderId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const orderId = req.params.id;
    const { status } = req.body;
    await service.updateOrderStatus(orderId, status);
    res.json({ message: `Order status updated to ${status}` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.cancelOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    await service.cancelOrder(orderId);
    res.json({ message: 'Order cancelled successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
