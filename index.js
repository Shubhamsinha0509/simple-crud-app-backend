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

mongoose
  .connect(
    "mongodb+srv://shubhamsinha7778:UkR0FMhpkiCDS9SN@backenddb.wdb7htl.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })

  .catch(() => {
    console.log("Connection failed");
  });
