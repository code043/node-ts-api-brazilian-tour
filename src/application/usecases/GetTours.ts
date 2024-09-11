import { RepositoryDatabase } from "../../types/TourType";

export default class GetTours {
  constructor(readonly tourRepository: RepositoryDatabase) {}

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
