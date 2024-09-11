import { Request, Response } from "express";
import GetTours from "../usecases/GetTours";
import { TourMemory } from "../../infra/repositories/TourRepositoryInMemory";
import InserTour from "../usecases/InsertTour";
import InserManyTours from "../usecases/InsertManytours";

const getTours = async (req: Request, res: Response) => {
  const database = TourMemory;
  const tourUsecase = new GetTours(database);
  const tour = await tourUsecase.execute();
  res.json(tour);
};
const insertTour = async (req: Request, res: Response) => {
  const database = TourMemory;
  const tourUsecase = new InserTour(database);
  await tourUsecase.execute(req.body);
  res.json({ message: "Tour has been inserted" });
};
const insertManyTours = async (req: Request, res: Response) => {
  const database = TourMemory;
  const tourUsecase = new InserManyTours(database);
  await tourUsecase.execute(req.body);
  res.json({ message: "Tours has been insert" });
};

export { getTours, insertTour, insertManyTours };
