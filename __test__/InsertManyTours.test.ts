import GetTours from "../src/application/usecases/GetTours";
import InserManyTours from "../src/application/usecases/InsertManytours";
import { TourDatabase } from "../src/infra/repositories/TourRepositoryDatabase";
import { TourMemory } from "../src/infra/repositories/TourRepositoryInMemory";

test("Should insert 2 tours using memory", async () => {
  const database = TourMemory;
  const insertManyTours = new InserManyTours(database);
  const getTours = new GetTours(database);
  const input = [
    {
      name: "Pão de Açúcar (RIO DE JANEIRO)",
      info: "Os cariocas – nativos ou por opção – sabem bem: há algumas coisas que todo mundo deve fazer na Cidade Maravilhosa, pelo menos uma vez na vida. Um dos mais famosos cartões-postais da Cidade, o Pão de Açúcar tem uma vista de 360°, contemplando diversas praias e até a vizinha Niteroi. O caminho, de bondinho - todo envidraçado -, é feito em duas etapas: primeiro até o Morro da Urca, depois até lá. No destino final, há bares, restaurantes e lojas de souvenires.",
      image: "http://localhost:3000/images/pao-de-acucar.jpg",
    },
    {
      name: "Ilha Grande (RIO DE JANEIRO)",
      info: "Se você ainda não conhece Ilha Grande, não sabe o que está perdendo. O local é considerado um verdadeiro paraíso em meio ao mar de Angra dos Reis, no Rio de Janeiro. Por não ser permitido que carros entrem na ilha, o acesso se dá apenas por balsa ou barco – partindo de Angra, o que torna o ambiente ainda mais incrível e charmoso! Muito bem preservada e repleta de animais marinhos, Ilha Grande é o tipo de lugar para se apaixonar e querer voltar várias vezes. Com trilhas, cachoeiras e restaurantes charmosos, o clima rústico e a paisagem de tirar o fôlego vão te surpreender. ",
      image: "http://localhost:3000/images/ilha-grande.jpg",
    },
  ];
  await insertManyTours.execute(input);
  const tours = await getTours.execute();
  expect(tours).toHaveLength(2);
});
test.skip("Should insert 2 tours using database", async () => {
  const database = TourDatabase;
  const insertManyTours = new InserManyTours(database);
  const getTours = new GetTours(database);
  const input = [
    {
      name: "Pão de Açúcar (RIO DE JANEIRO)",
      info: "Os cariocas – nativos ou por opção – sabem bem: há algumas coisas que todo mundo deve fazer na Cidade Maravilhosa, pelo menos uma vez na vida. Um dos mais famosos cartões-postais da Cidade, o Pão de Açúcar tem uma vista de 360°, contemplando diversas praias e até a vizinha Niteroi. O caminho, de bondinho - todo envidraçado -, é feito em duas etapas: primeiro até o Morro da Urca, depois até lá. No destino final, há bares, restaurantes e lojas de souvenires.",
      image: "http://localhost:3000/images/pao-de-acucar.jpg",
    },
    {
      name: "Ilha Grande (RIO DE JANEIRO)",
      info: "Se você ainda não conhece Ilha Grande, não sabe o que está perdendo. O local é considerado um verdadeiro paraíso em meio ao mar de Angra dos Reis, no Rio de Janeiro. Por não ser permitido que carros entrem na ilha, o acesso se dá apenas por balsa ou barco – partindo de Angra, o que torna o ambiente ainda mais incrível e charmoso! Muito bem preservada e repleta de animais marinhos, Ilha Grande é o tipo de lugar para se apaixonar e querer voltar várias vezes. Com trilhas, cachoeiras e restaurantes charmosos, o clima rústico e a paisagem de tirar o fôlego vão te surpreender. ",
      image: "http://localhost:3000/images/ilha-grande.jpg",
    },
  ];
  await insertManyTours.execute(input);
  const tours = await getTours.execute();
  expect(tours).toHaveLength(2);
});
