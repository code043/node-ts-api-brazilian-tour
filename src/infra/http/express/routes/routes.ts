import express from "express";
import { getTours } from "../../../../application/controllers/tour-controller";
const routerTours = express.Router();

routerTours.get("/tours", getTours);

export { routerTours };
