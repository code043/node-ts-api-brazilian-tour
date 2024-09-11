import { TourDatabase } from "../infra/repositories/TourRepositoryDatabase";
import { TourMemory } from "../infra/repositories/TourRepositoryInMemory";

export type TourData = {
  name: string;
  info: string;
  image: string;
};

export type RepositoryDatabase = typeof TourMemory | typeof TourDatabase;
