import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';

import styles from './resultDetail.module.scss';

const userData = [
  { id: 1, age: 13, score: 200 },
  { id: 2, age: 25, score: 230 },
  { id: 3, age: 32, score: 120 },
  { id: 4, age: 47, score: 400 },
  { id: 5, age: 15, score: 250 },
];

type CalculatedUserData = {
  ageGroup: number;
  score: number;
};

const ageToAgeGroup = (age: number): number => {
  return Math.floor(age / 10) * 10;
};

type averageType = number;

interface AverageInfo {
  scoreSum: number;
  count: number;
}

function calculaterUserData(data: typeof userData): CalculatedUserData[] {
  const result: Record<averageType, AverageInfo> = {};

  data.forEach((item) => {
    const key = ageToAgeGroup(item.age);
    result[key] = {
      scoreSum: (result[key]?.scoreSum || 0) + item.score,
      count: (result[key]?.count || 0) + 1,
    };
  });

  return Object.entries(result).map(([key, value]) => {
    return {
      ageGroup: parseInt(key, 10),
      score: value.scoreSum / value.count,
    };
  });
}

const AGE_GROUPS = [10, 20, 30, 40];
const AGE_LABELS: Record<number, string> = {
  10: 'teens',
  20: 'twenties',
  30: 'thirties',
  40: 'forties',
};

const calculatedData = calculaterUserData(userData);
console.log(calculatedData);
const Chart = () => {
  return (
    <div>
      <h1 className={styles.title}>나이대별 점수차트</h1>
      <div className={styles.cardBox}>
        <VictoryChart domainPadding={20}>
          <VictoryBar data={calculatedData} x='ageGroup' y='score' style={{ data: { fill: '#0398fc' } }} />
          <VictoryAxis tickValues={AGE_GROUPS} tickFormat={(ageGroup: number) => AGE_LABELS[ageGroup]} />
        </VictoryChart>
      </div>
    </div>
  );
};

export default Chart;
