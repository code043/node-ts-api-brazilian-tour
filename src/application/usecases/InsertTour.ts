import { RepositoryDatabase } from "../../types/TourType";

export default class InserTour {
  constructor(readonly tourRepository: RepositoryDatabase) {}

  async execute(input: Input): Promise<void> {
    this.tourRepository.insertTour(input);
  }
}
type Input = {
  name: string;
  info: string;
  image: string;
};
