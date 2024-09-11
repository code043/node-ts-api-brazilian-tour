import express from "express";
import { routerTours } from "./infra/http/express/routes/routes";
import path from "path";
routerTours;
const app = express();
app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));
app.use(routerTours);

app.listen(3000, () => {
  console.log("Running...");
});
