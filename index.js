const express = require("express");
const app = express();
const product = require("./api/product");

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));


app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});
app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

app.use("/api/product", product);

module.exports = app;