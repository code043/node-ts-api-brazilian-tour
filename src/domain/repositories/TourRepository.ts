import { Tour } from "../entities/Tour";

export default interface TourRepository {
  getTours(): Promise<Tour[]>;
}
