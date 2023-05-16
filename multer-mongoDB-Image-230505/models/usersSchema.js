const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("User", userSchema);

// const productSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     featured: {
//       type: Boolean,
//       required: false,
//     },
//     rating: {
//       type: Number,
//       default: 4.8,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now(),
//     },
//     company: {
//       type: String,
//       enum: {
//         values: ["apple", "samsung", "dell", "mi"],
//         message: `{value} is not supported`,
//       },
//     },
//   });
