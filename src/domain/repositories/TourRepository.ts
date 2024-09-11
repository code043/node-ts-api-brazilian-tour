import { Tour } from "../entities/Tour";

export default interface TourRepository {
  getTours(): Promise<Tour[]>;
  insertTour(tour: Tour): void;
  insertManyTours(tours: Tour[]): void;
}
