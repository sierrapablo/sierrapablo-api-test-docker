const cors = require("cors");

const express = require("express");
const app = express();
const port = 3000;

const testRoute = require("./routes/testRoute");

app.use(cors());
app.use("/", testRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
