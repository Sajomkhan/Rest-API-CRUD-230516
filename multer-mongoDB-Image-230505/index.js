const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()

const connectDB = require("../../db/connection");
const usersRouter = require("./routes/usersRoute");
const productsRoute1 = require("./routes/productsRoute-1");
const productsRoute2 = require("./routes/productsRoute-2");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extented: true }));
app.use("/users/register", usersRouter);
app.use("/api/products-1", productsRoute1);
app.use("/api/products-2", productsRoute2);

// Home route
app.use("/", (req, res) => {
  res.statusCode = 200;
  res.send("<h1>Welcome to home page</h1>");
});

// Error handeling
app.use((req, res) => {
  res.statusCode = 404;
  res.send("Error 404: There is an Error");
});

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connectDB();
});

// app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json());
