// Backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./Config/db");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Import your routes here (after middleware)
const productRoutes = require("../Backend/routes/ProductRoutes");

// ✅ Route usage - Register your API endpoint
app.use("/api/Products",productRoutes);

// Simple test route
app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
