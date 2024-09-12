import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { routerTours } from "./infra/http/express/routes/routes";

dotenv.config();
const PORT = Number(process.env.PORT) || 3000;
const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Content-Type', 'Authorization",
    ],
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(routerTours);

app.listen(PORT, () => {
  console.log("Running on " + PORT);
});
