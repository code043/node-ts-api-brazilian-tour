import { Tour } from "../../domain/entities/Tour";
import TourRepository from "../../domain/repositories/TourRepository";
import { PrismaClient } from "@prisma/client";
import { TourData } from "../../types/TourType";

const prisma = new PrismaClient();

class TourRepositoryDatabase implements TourRepository {
  async getTourById(tourId: number): Promise<Tour> {
    const tour = await prisma.tour.findUnique({
      where: {
        id: tourId,
      },
    });
    return tour;
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
    return tours;
  }
}

export const TourDatabase = new TourRepositoryDatabase();
