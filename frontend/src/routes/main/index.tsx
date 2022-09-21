/* eslint-disable react/destructuring-assignment */ // 이건 뭘까
import { useEffect, useState } from 'react';
import Card from 'components/card';

const DUMMY_CARDS = [
  {
    id: 1,
    title: 'MBTI 테스트',
    shared: 3,
    views: 1,
    url: 'https://pbs.twimg.com/media/BvWm6_lIIAEImlf.jpg',
  },
  {
    id: 2,
    title: '소개팅 테스트',
    shared: 2,
    views: 2,
    url: 'https://pbs.twimg.com/media/BvWm6_lIIAEImlf.jpg',
  },
  {
    id: 3,
    title: '이상형 테스트',
    shared: 1,
    views: 3,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6JT68Ozr-V4H3ge_l4ZucmpfJK2rAhHpc4W5UtSxk_AHPmfj2gdHIBARH41AsMjh5Lg&usqp=CAU',
  },
];

export interface ICard {
  id: number;
  title: string;
  shared: number;
  views: number;
  url: string;
}

interface Props {
  select: 'shared' | 'views';
  find: string;
}

const Main = ({ select, find }: Props) => {
  const [dummyCards, setDummyCards] = useState<ICard[]>([...DUMMY_CARDS]);

  // 정렬
  dummyCards.sort((a: ICard, b: ICard) => b[select] - a[select]);

  // 검색
  useEffect(() => {
    if (find !== '') {
      const result = DUMMY_CARDS.filter((item) => item.title.toLowerCase().includes(find));
      setDummyCards(result);
    } else {
      setDummyCards(DUMMY_CARDS);
    }
  }, [find]);

  return (
    <>
      <h1>Main</h1>
      <p>Hey ~</p>
      <p>siwon</p>
      {dummyCards.map((card: ICard) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
};

export default Main;
