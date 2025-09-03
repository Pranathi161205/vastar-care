import express from "express";

const router = express.Router();

// Dummy login route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@test.com" && password === "1234") {
    res.json({ token: "sample-jwt-token" });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

export default router;
