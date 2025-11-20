import cors from "cors";
import express from "express";
import testRoute from "./routes/testRoute";

const app = express();
const port = 3000;

app.use(cors());
app.use("/", testRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
