const express = require("express");
const app = express();
const port = 3000;

app.get("/test", (_req, res) => {
  res.json({ status: "OK!", message: "Tu servicio funciona perfectamente!" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
