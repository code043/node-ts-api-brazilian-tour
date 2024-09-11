import { RepositoryDatabase } from "../../types/TourType";

export default class GetTourById {
  constructor(readonly tourRepository: RepositoryDatabase) {}

  async execute(id: number): Promise<Output> {
    return this.tourRepository.getTourById(id);
  }
}

type Output = {
  id: number;
  name: string;
  info: string;
  image: string;
};
