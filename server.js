import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import router from "./router.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use("/static", express.static(path.resolve(__dirname, "./dist")));
app.use("/static", express.static(path.resolve(__dirname, "./node_modules")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/", router);

const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`server running on PORT ${port} ...`);
});
