const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const JWT_SECRET = 'dev_secret_key';

exports.login = async (email, password) => {
  const res = await pool.query(
    'SELECT id, password FROM users WHERE email = $1',
    [email]
  );

  if (res.rowCount === 0) {
    throw new Error('Invalid credentials');
  }

  const user = res.rows[0];
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error('Invalid credentials');
  }

  return jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
};
