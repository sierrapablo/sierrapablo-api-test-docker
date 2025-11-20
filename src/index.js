import express from "express";
import testRoute from "./routes/testRoute.js";
import versionRoute from "./routes/versionRoute.js";

const app = express();
const port = 3000;

app.use(cors());

app.use("/", testRoute);
app.use("/", versionRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
