import express from "express";
import path from "path";
import dotenv from "dotenv";
import { routerTours } from "./src/infra/http/express/routes/routes";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(routerTours);

app.listen(PORT, () => {
  console.log("Running on " + PORT);
});
