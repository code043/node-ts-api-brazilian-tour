import { TourData } from "../../types/TourType";
import { Tour } from "../entities/Tour";

export default interface TourRepository {
  getTours(): Promise<Tour[]>;
  getTourById(tourId: number): Promise<Tour>;
  insertTour(tour: Tour): Promise<void>;
  insertManyTours(tours: Tour[]): Promise<void>;
}
