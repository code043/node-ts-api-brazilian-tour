import GetTours from "../application/usecases/GetTours";
import TourRepositoryInMemory from "../infra/repositories/TourRepositoryInMemory";

test("should get name of tour", async () => {
  const tourRepositoryInMemory = new TourRepositoryInMemory();
  const getTours = new GetTours(tourRepositoryInMemory);
  const output = await getTours.execute();
  expect(output[0].id).toBeDefined();
  expect(output[0].name).toBe("PÃO DE AÇÚCAR (RIO DE JANEIRO)");
});
