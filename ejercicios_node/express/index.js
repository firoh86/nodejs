const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("<h1>hola mundo desde express y nodejs</h1>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server on port 3000");
});
