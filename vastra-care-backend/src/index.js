const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes); // ✅ now /api/auth/login works

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
