import { Tour } from "../../domain/entities/Tour";
import TourRepository from "../../domain/repositories/TourRepository";
import { PrismaClient } from "@prisma/client";
import { TourData } from "../../types/TourType";

const prisma = new PrismaClient();

class TourRepositoryDatabase implements TourRepository {
  getTourById(): Promise<Tour> {
    throw new Error("Method not implemented.");
  }
  async insertTour(tour: TourData): Promise<void> {
    await prisma.tour.create({
      data: tour,
    });
  }
  async insertManyTours(tours: TourData[]): Promise<void> {
    await prisma.tour.createMany({
      data: tours,
    });
  }
  async getTours(): Promise<Tour[]> {
    const tours = await prisma.tour.findMany();
    console.log(tours);
    return tours;
  }
}
export const TourDatabase = new TourRepositoryDatabase();
