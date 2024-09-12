import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { routerTours } from "./infra/http/express/routes/routes";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(routerTours);

app.listen(PORT, () => {
  console.log("Running on " + PORT);
});
