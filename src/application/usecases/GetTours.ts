import TourRepositoryDatabase from "../../infra/repositories/TourRepositoryDatabase";
import TourRepositoryInMemory from "../../infra/repositories/TourRepositoryInMemory";

export default class GetTours {
  constructor(readonly tourRepository: TourRepositoryInMemory) {}

  async execute(): Promise<Output[]> {
    return this.tourRepository.getTours();
  }
}

type Output = {
  id: number;
  name: string;
  info: string;
  image: string;
};
