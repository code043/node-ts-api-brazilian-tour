import { Tour } from "./Tour";
import TourRepository from "./TourRepository";

export default class TourRepositoryInMemory implements TourRepository {
  async getTours(): Promise<Tour[]> {
    return [
      {
        id: 1,
        name: "PÃO DE AÇÚCAR (RIO DE JANEIRO)",
        info: "Os cariocas – nativos ou por opção – sabem bem: há algumas coisas que todo mundo deve fazer na Cidade Maravilhosa, pelo menos uma vez na vida. Um dos mais famosos cartões-postais da Cidade, o Pão de Açúcar tem uma vista de 360°, contemplando diversas praias e até a vizinha Niteroi. O caminho, de bondinho - todo envidraçado -, é feito em duas etapas: primeiro até o Morro da Urca, depois até lá. No destino final, há bares, restaurantes e lojas de souvenires.",
        image:
          "https://www.guiadasemana.com.br/contentFiles/image/opt_w720h445/2017/12/FEA/50029_pao-de-acucar.jpg",
      },
    ];
  }
}
