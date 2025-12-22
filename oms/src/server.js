// src/server.js
const express = require('express');
const app = express();           // <--- you MUST define app
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Example route (optional test)
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Import your routes
const orderRoutes = require('./routes/order.routes');
app.use('/orders', orderRoutes);

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
