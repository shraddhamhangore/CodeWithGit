const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://127.0.0.1:27017/mayurfurniture");

const products = [
  {
    name: "Luxe Armchair",
    category: "sofa",
    image: "http://localhost:3000/assets/armchair.avif",
  },
  {
    name: "Queen Bed",
    category: "bed",
    image: "http://localhost:3000/assets/mbed.jpg",
  },
  {
    name: "Coffee Table",
    category: "table",
    image: "http://localhost:3000/assets/cofeetable.jpg",
  },
];

Product.insertMany(products)
  .then(() => {
    console.log("Data Seeded");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Seed Error:", err);
  });
