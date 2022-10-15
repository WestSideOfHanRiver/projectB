import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';

const userData = [
  { id: 1, age: 13, score: 200 },
  { id: 2, age: 25, score: 230 },
  { id: 3, age: 32, score: 120 },
  { id: 4, age: 47, score: 400 },
];

const Chart = () => {
  //   render() {
  return (
    <div>
      <h1>나이대별 점수차트</h1>
      <VictoryChart domainPadding={20}>
        <VictoryBar data={userData} x='id' y='score' />
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={(value) => ['teens', 'twenties', 'thirties', 'forties'][value - 1]}
        />
      </VictoryChart>
    </div>
  );
  //   }
};

export default Chart;
