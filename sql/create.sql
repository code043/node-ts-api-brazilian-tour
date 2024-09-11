
create table Tour (
	id serial primary key,
	name varchar(50) not null,
	info varchar(500) not null,
  image varchar(50) not null
);

insert into Tour (name, info, image) values('Pão de Açúcar', 'Os cariocas – nativos ou por opção – sabem bem: há algumas coisas que todo mundo deve fazer na Cidade Maravilhosa, pelo menos uma vez na vida. Um dos mais famosos cartões-postais da Cidade, o Pão de Açúcar tem uma vista de 360°, contemplando diversas praias e até a vizinha Niteroi. O caminho, de bondinho - todo envidraçado -, é feito em duas etapas: primeiro até o Morro da Urca, depois até lá. No destino final, há bares, restaurantes e lojas de souvenires.', 'http://localhost:3000/images/pao-de-acucar.jpg');