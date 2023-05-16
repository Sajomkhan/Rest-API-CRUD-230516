const User = require("../models/usersSchema");

exports.addUser = async (req, res) => {
  const file = req.file.filename;
  const { name, email, password } = req.body;

  if (!name || !email || !password || !file) {
    res.status(404).send("Please fill all required fields");
  }
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.status(404).send("This email id already exists");
  }

  try {
    const newUser = new User({ name, email, password, img: file });
    const saveUser = await newUser.save();
    res.status(201).send(saveUser);
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: error.message });
    // res.status(500).send({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const getUsers = await User.find().limit(100);
    if (getUsers) {
      res.status(200).send({
        sussess: true,
        message: "Request successful",
        data: getUsers,
      });
    }
  } catch (error) {
    res.status(404).send({message: error.message});    
  }
};
