import cors from "cors";

import express from "express";
const app = express();
const port = 3000;

import testRoute from "./routes/testRoute";

app.use(cors());
app.use("/", testRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
