import express from "express";
import cors from "cors";
import testRoute from "./routes/testRoute.js";
import versionRoute from "./routes/versionRoute.js";
import timeRoute from "./routes/timeRoute.js";

const app = express();
const port = 3000;

app.use(cors());

app.use("/", testRoute);
app.use("/", versionRoute);
app.use("/", timeRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
