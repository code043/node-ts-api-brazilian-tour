import { Tour } from "../../domain/entities/Tour";
import TourRepository from "../../domain/repositories/TourRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class TourRepositoryDatabase implements TourRepository {
  async getTours(): Promise<Tour[]> {
    const tours = await prisma.tour.findMany();
    return tours;
  }
}
