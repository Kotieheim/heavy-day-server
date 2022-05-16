const express = require("express");
const app = express();
const port = 3050;

app.get("/", (req, res) => {
  res.send("Placeholder for server");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
