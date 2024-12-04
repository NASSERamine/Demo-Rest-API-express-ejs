let products = [];

const addProduct = async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Name and price are required" });
  }

  const id = products.length + 1;
  const newProduct = { id, name, price };
  products.push(newProduct);

  // Redirection vers la vue des produits
  res.redirect("/api/products/view");
};

const getAllproducts = async (req, res) => {
  res.status(200).json(products);
};

module.exports = { addProduct, getAllproducts, products };
