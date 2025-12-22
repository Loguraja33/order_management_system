// src/services/order.service.js
const pool = require('../db');
const ALLOWED_TRANSITIONS = {
  PENDING: ['CONFIRMED', 'CANCELLED'],
  CONFIRMED: ['SHIPPED'],
  SHIPPED: [],
  CANCELLED: []
};

exports.createOrder = async (userId, items) => {
  // stub for now
  return 'dummy-order-id';
};

exports.updateOrderStatus = async (orderId, newStatus) => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const res = await client.query(
      `SELECT status FROM orders WHERE id = $1 FOR UPDATE`,
      [orderId]
    );

    if (res.rowCount === 0) {
      throw new Error('Order not found');
    }

    const currentStatus = res.rows[0].status;
    const allowed = ALLOWED_TRANSITIONS[currentStatus] || [];

    if (!allowed.includes(newStatus)) {
      throw new Error(`Invalid transition: ${currentStatus} → ${newStatus}`);
    }

    await client.query(
      `UPDATE orders SET status = $1 WHERE id = $2`,
      [newStatus, orderId]
    );

    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};

exports.cancelOrder = async (orderId) => {
  return exports.updateOrderStatus(orderId, 'CANCELLED');
};
