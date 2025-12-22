const express = require('express');
const app = express();

app.use(express.json());

// 🔴 THIS LINE IS CRITICAL
const orderRoutes = require('./routes/order.routes');
app.use('/orders', orderRoutes);

module.exports = app;
