const express = require("express");
const app = express();
const PORT = 3500;


app.get("/", (req, res) => {
  res.send(`Welcome to Docker + Microservices meetup`);
});

app.listen(PORT, () => {
  console.log(`Listening to server at port : ${PORT}`);
});
