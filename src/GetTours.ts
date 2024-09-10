import TourRepositoryInMemory from "./TourRepositoryInMemory";

export default class GetTours {
  constructor(readonly tourRepositoryInMemory: TourRepositoryInMemory) {}

  async execute(): Promise<Output[]> {
    return this.tourRepositoryInMemory.getTours();
  }
}

type Output = {
  id: number;
  name: string;
  info: string;
  image: string;
};
