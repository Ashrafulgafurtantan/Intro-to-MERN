const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const app = express();
const routes = require("./routes/api");
mongoose.connect("mongodb://localhost:27017/blackDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(5000 || process.env.PORT, function () {
  console.log("strting on port 5000...");
});
