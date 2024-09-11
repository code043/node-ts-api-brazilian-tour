import { Tour } from "../../domain/entities/Tour";
import TourRepository from "../../domain/repositories/TourRepository";

export default class TourRepositoryInMemory implements TourRepository {
  listTour: Tour[];
  constructor() {
    this.listTour = [];
  }
  insertTour(tour: Tour): void {
    this.listTour.push(tour);
  }
  insertManyTours(tours: Tour[]): void {
    for (const tour of tours) {
      this.listTour.push(tour);
    }
  }
  async getTours(): Promise<Tour[]> {
    return this.listTour;
  }
}
