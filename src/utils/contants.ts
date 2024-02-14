import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.svg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';

export type CardType = {
    url: string;
    title: string;
    id: number;
  };

export const cards: CardType[] = [
    {
      url: img1,
      title: "Grãos de qualidade",
      id: 1,
    },
    {
      url: img2,
      title: "Cafés saborosos",
      id: 2,
    },
    {
      url: img3,
      title: "Cappuccinos deliciosos",
      id: 3,
    },
    {
      url: img4,
      title: "Lanches feitos na hora",
      id: 4,
    },
    {
      url: img5,
      title: "Ambiente limpo",
      id: 5,
    },
    {
      url: img6,
      title: "Produtos com desconto",
      id: 6,
    },
    {
      url: img7,
      title: "Profissionais experientes",
      id: 7,
    },
  ];