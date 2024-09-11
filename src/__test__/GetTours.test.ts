import GetTours from "../application/usecases/GetTours";
import InserTour from "../application/usecases/InsertTour";
import { TourDatabase } from "../infra/repositories/TourRepositoryDatabase";
import { TourMemory } from "../infra/repositories/TourRepositoryInMemory";

test("should get name of tour using memory", async () => {
  const database = TourMemory;
  const insertTour = new InserTour(database);
  const input = {
    name: "Pão de Açúcar (RIO DE JANEIRO)",
    info: "Os cariocas – nativos ou por opção – sabem bem: há algumas coisas que todo mundo deve fazer na Cidade Maravilhosa, pelo menos uma vez na vida. Um dos mais famosos cartões-postais da Cidade, o Pão de Açúcar tem uma vista de 360°, contemplando diversas praias e até a vizinha Niteroi. O caminho, de bondinho - todo envidraçado -, é feito em duas etapas: primeiro até o Morro da Urca, depois até lá. No destino final, há bares, restaurantes e lojas de souvenires.",
    image: "http://localhost:3000/images/pao-de-acucar.jpg",
  };
  insertTour.execute(input);
  const getTours = new GetTours(database);
  const output = await getTours.execute();
  expect(output[0].id).toBeDefined();
  expect(output[0].name).toBe("Pão de Açúcar (RIO DE JANEIRO)");
});

test.skip("should get name of tour using database", async () => {
  const database = TourDatabase;
  const insertTour = new InserTour(database);
  const input = {
    name: "Pão de Açúcar (RIO DE JANEIRO)",
    info: "Os cariocas – nativos ou por opção – sabem bem: há algumas coisas que todo mundo deve fazer na Cidade Maravilhosa, pelo menos uma vez na vida. Um dos mais famosos cartões-postais da Cidade, o Pão de Açúcar tem uma vista de 360°, contemplando diversas praias e até a vizinha Niteroi. O caminho, de bondinho - todo envidraçado -, é feito em duas etapas: primeiro até o Morro da Urca, depois até lá. No destino final, há bares, restaurantes e lojas de souvenires.",
    image: "http://localhost:3000/images/pao-de-acucar.jpg",
  };
  insertTour.execute(input);
  const getTours = new GetTours(database);
  const output = await getTours.execute();
  expect(output[0].id).toBeDefined();
  expect(output[0].name).toBe("Pão de Açúcar (RIO DE JANEIRO)");
});
