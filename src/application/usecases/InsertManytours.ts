import TourRepositoryDatabase from "../../infra/repositories/TourRepositoryDatabase";
import TourRepositoryInMemory from "../../infra/repositories/TourRepositoryInMemory";

export default class InserManyTours {
  constructor(readonly tourRepository: TourRepositoryInMemory) {}

  async execute(input: Input[]): Promise<void> {
    this.tourRepository.insertManyTours(input);
  }
}
type Input = {
  id: number;
  name: string;
  info: string;
  image: string;
};
