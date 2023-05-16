const Product = require("../models/productsSchema");

exports.addProduct = async (req, res) => {
  const file = req.file.filename;
  const { title, price, desc } = req.body;

  try {
    const newProduct = new Product({ title, price, desc, img: file });
    const saveProduct = await newProduct.save();
    res.status(201).send(saveProduct);
  } catch (error) {
    res.status(500).send( error.message );
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const getProducts = await Product.find().limit(100);
    if (getProducts) {
      res.status(200).send({
        sussess: true,
        message: "Request successful",
        data: getProducts,
      });
    }
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const result = await Product.findById(req.params.id);

  await result.remove();

  res.status(200).json({ removed_id: req.params.id });
};
// exports.deleteProduct = async (req, res) => {
//   const result = await Product.findByIdAndDelete(req.params.id);
//   res.json(result);
// };

exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  
  if(!product) {
    res.status(404).send({ message: error.message });
  }

  const productUpdate = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

  res.status(200).json(productUpdate);
};


