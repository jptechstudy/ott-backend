require("dotenv").config();
import express from 'express';
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/first", (req, res) => {
  res.send("First API call");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login API</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
