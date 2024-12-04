const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAllproducts,
} = require("../controllers/productController");

// Import explicit de `products`
const { products } = require("../controllers/productController");

router.post("/", addProduct);
router.get("/all", getAllproducts);

// Route pour afficher les produits
router.get("/view", (req, res) => {
  res.render("products.ejs", { products });
});

module.exports = router;
