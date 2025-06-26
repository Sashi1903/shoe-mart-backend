import Product from "../models/Product.js"; 

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const addProduct = async (req, res) => {
  const { title, price, image } = req.body;
  const product = await Product.create({ title, price, image });
  res.json(product);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updated = await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.json({ message: "Deleted" });
};
