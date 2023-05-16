const express = require("express");
const router = express.Router();

const upload = require("../multer/imgconfig");
const Product = require("../models/productsSchema");
// const { addProduct, getAllProducts, deleteProduct, updateProduct } = require('../controllers/productsController')

router.post("/", upload.single("img"), async (req, res) => {
  const file = req.file.filename;
  const { title, price, desc } = req.body;
  try {
    const product = new Product({ title, price, desc, img: file });
    const savedProduct = await product.save();
    return res.status(201).send(savedProduct);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// put method is not working properly
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  // const file = req.file.filename;
  // const { title, price, desc } = req.body;
  try {
    // const product =await Product.findByIdAndUpdate(id, {...req.body, ...req.file.filename}, {new: true})
    const product = await Product.findByIdAndUpdate(
      id,
      { title, price, desc, img: file },
      { new: true }
    );
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const getProducts = await Product.find().limit(100);
    if (getProducts) {
      res.status(200).send(getProducts);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
