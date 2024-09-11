import GetTours from "../application/usecases/GetTours";
import InserTour from "../application/usecases/InsertTour";
import { TourDatabase } from "../infra/repositories/TourRepositoryDatabase";
import { TourMemory } from "../infra/repositories/TourRepositoryInMemory";

test("Should insert a tour using Memory", async () => {
  const database = TourMemory;
  const insertTour = new InserTour(database);
  const getTours = new GetTours(database);
  const input = {
    name: "Pão de Açúcar (RIO DE JANEIRO)",
    info: "Os cariocas – nativos ou por opção – sabem bem: há algumas coisas que todo mundo deve fazer na Cidade Maravilhosa, pelo menos uma vez na vida. Um dos mais famosos cartões-postais da Cidade, o Pão de Açúcar tem uma vista de 360°, contemplando diversas praias e até a vizinha Niteroi. O caminho, de bondinho - todo envidraçado -, é feito em duas etapas: primeiro até o Morro da Urca, depois até lá. No destino final, há bares, restaurantes e lojas de souvenires.",
    image: "http://localhost:3000/images/pao-de-acucar.jpg",
  };
  await insertTour.execute(input);
  const tour = await getTours.execute();
  expect(tour[0].id).toBeDefined();
});

test.skip("Should insert a tour using Database", async () => {
  const database = TourDatabase;
  const insertTour = new InserTour(database);
  const getTours = new GetTours(database);
  const input = {
    name: "Pão de Açúcar (RIO DE JANEIRO)",
    info: "Os cariocas – nativos ou por opção – sabem bem: há algumas coisas que todo mundo deve fazer na Cidade Maravilhosa, pelo menos uma vez na vida. Um dos mais famosos cartões-postais da Cidade, o Pão de Açúcar tem uma vista de 360°, contemplando diversas praias e até a vizinha Niteroi. O caminho, de bondinho - todo envidraçado -, é feito em duas etapas: primeiro até o Morro da Urca, depois até lá. No destino final, há bares, restaurantes e lojas de souvenires.",
    image: "http://localhost:3000/images/pao-de-acucar.jpg",
  };
  await insertTour.execute(input);
  const tour = await getTours.execute();
  expect(tour[0].id).toBeDefined();
});
