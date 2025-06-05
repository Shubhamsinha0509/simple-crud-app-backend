require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const ProductRoute = require("./routes/product.route.js");
const app = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

app.use("/api/products", ProductRoute);

app.get("/", (req, res) => {
  res.send("Hello from node API Server");
});

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to database");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.log("❌ Connection failed:", err.message);
  });
