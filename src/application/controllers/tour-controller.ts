import { Request, Response } from "express";
import GetTours from "../usecases/GetTours";
import TourRepositoryInMemory from "../../infra/repositories/TourRepositoryInMemory";
import TourRepositoryDatabase from "../../infra/repositories/TourRepositoryDatabase";
//import // from "../usecases/GetTours"

const getTours = async (req: Request, res: Response) => {
  const database = new TourRepositoryInMemory();
  const tourUsecase = new GetTours(database);
  const tour = await tourUsecase.execute();
  res.json(tour);
};

export { getTours };
