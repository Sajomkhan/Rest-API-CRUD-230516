const express = require("express");
const router = express.Router();

const upload = require("../multer/imgconfig");
const {
  addProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/productsController");

router.post("/", upload.single("img"), addProduct);
router.get("/", getAllProducts);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

module.exports = router;
