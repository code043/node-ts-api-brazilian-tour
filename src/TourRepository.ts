import { Tour } from "./Tour";

export default interface TourRepository {
  getTours(): Promise<Tour[]>;
}
