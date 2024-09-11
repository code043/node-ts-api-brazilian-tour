import { RepositoryDatabase, TourData } from "../../types/TourType";

export default class InserManyTours {
  constructor(readonly tourRepository: RepositoryDatabase) {}

  async execute(input: TourData[]): Promise<void> {
    this.tourRepository.insertManyTours(input);
  }
}
type Input = {
  name: string;
  info: string;
  image: string;
};
