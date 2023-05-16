const express = require("express");
const router = express.Router();

const { addUser, getAllUsers } = require("../controllers/usersController");
const upload = require("../multer/imgconfig");

router.post("/", upload.single("img"), addUser);
router.get("/", getAllUsers);

module.exports = router;
