export interface Product {
  slug: string;
  title: string;
  description: string;
  category: string;   // Agora obrigatório para categorizar
  price: string;
  url: string;        // Link afiliado
  imageUrl?: string;
}

export const products: Product[] = [
  {
    slug: "cadeira-gamer",
    title: "Cadeira Gamer",
    description: "Cadeira gamer super confortável",
    category: "Acessorios",
    price: "R$ 605,34",
    url: "https://amzn.to/3VQIpNk",
    imageUrl: "https://m.media-amazon.com/images/I/51NQtV4TSsL._AC_SY300_SX300_QL70_ML2_.jpg",
  },
  {
    slug: "mouse-gamer",
    title: "Mouse Gamer ",
    description: "Mouse Gamer especial para alta performance.",
    category: "Acessórios",
    price: "R$ 79,90",
    url: "https://amzn.to/3VjpFGb",
    imageUrl: "https://m.media-amazon.com/images/I/51ugxZPQiOS._AC_SX425_.jpg",
  },
  {
    slug: "jogo-rpg-aventura",
    title: "Jogo RPG Aventura",
    description: "Mergulhe na aventura épica deste RPG único.",
    category: "Jogos",
    price: "R$ 149,90",
    url: "https://amzn.to/42vseZv",
    imageUrl: "https://m.media-amazon.com/images/I/812Qp5Tes6L._AC_SY300_SX300_QL70_ML2_.jpg",
  },
  {
    slug: "livro-de-js",
    title: "Livro Aprenda JavaScript",
    description: "Domine JavaScript com este livro completo e didático.",
    category: "Livros",
    price: "R$ 247,20",
    url: "https://amzn.to/3ImcMbp",
    imageUrl: "https://m.media-amazon.com/images/I/41Mj94QmgtL._SY445_SX342_ControlCacheEqualizer_.jpg",
  },
  // demais produtos...
];
