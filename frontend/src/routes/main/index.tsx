import Card from 'components/card';

const DUMMY_CARDS = [
  {
    id: 1,
    title: 'MBTI 테스트',
    shared: 12345,
    views: 654321,
    url: 'https://i.ytimg.com/vi/JnBrl8906kE/maxresdefault.jpg',
  },
  {
    id: 2,
    title: '소개팅 테스트',
    shared: 281271,
    views: 1231541,
    url: 'https://pbs.twimg.com/media/BvWm6_lIIAEImlf.jpg',
  },
  {
    id: 3,
    title: '이상형 테스트',
    shared: 12331,
    views: 55223,
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

const Main = () => {
  return (
    <>
      <h1>Main</h1>
      <p>Hey ~</p>
      <p>siwon</p>
      {DUMMY_CARDS.map((card: ICard) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
};

export default Main;
