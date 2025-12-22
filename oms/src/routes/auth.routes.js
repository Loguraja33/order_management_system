import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

/**
 * TEMP login (static user)
 * Later we will connect DB
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // basic validation
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  // TEMP user (for testing)
  if (email !== "admin@test.com" || password !== "admin123") {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { email, role: "ADMIN" },
    "SECRET_KEY",
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token,
    role: "ADMIN"
  });
});

export default router;
