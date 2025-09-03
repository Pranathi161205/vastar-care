const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@example.com" && password === "123456") {
    return res.json({ token: "sample-jwt-token" });
  }

  res.status(400).json({ message: "Invalid credentials" });
});

module.exports = router;
