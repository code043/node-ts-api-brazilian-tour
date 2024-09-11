import express from "express";
import {
  getTours,
  insertManyTours,
  insertTour,
} from "../../../../application/controllers/tour-controller";
const routerTours = express.Router();

routerTours.get("/tours", getTours);
routerTours.post("/tours", insertTour);
routerTours.post("/group-tours", insertManyTours);

export { routerTours };
