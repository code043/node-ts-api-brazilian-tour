import { Tour } from "../../domain/entities/Tour";
import TourRepository from "../../domain/repositories/TourRepository";
import { TourData } from "../../types/TourType";

class TourRepositoryInMemory implements TourRepository {
  listTour: Tour[];
  constructor() {
    this.listTour = [];
  }
  async getTourById(tourId: number): Promise<Tour> {
    const tour: Tour = null;
    for (const tour of this.listTour) {
      if (tour.id === tourId) {
        return tour;
      }
    }
    return tour;
  }
  async insertTour(tour: TourData): Promise<void> {
    const newTour = {
      ...tour,
      id: this.listTour.length + 1,
    };
    this.listTour.push(newTour);
  }
  async insertManyTours(tours: TourData[]): Promise<void> {
    for (const tour of tours) {
      const newTour = {
        ...tour,
        id: this.listTour.length + 1,
      };
      this.listTour.push(newTour);
    }
  }
  async getTours(): Promise<Tour[]> {
    return this.listTour;
  }
}
export const TourMemory = new TourRepositoryInMemory();
