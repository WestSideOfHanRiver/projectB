import React from 'react';

import { VictoryChart, VictoryArea } from 'victory';

interface Props {
  score: number;
}

const AreaChart = ({ score }: Props) => {
  return (
    <>
      <p>당신의 점수는 {score}점 입니다.</p>
      <VictoryChart animate={{ duration: 1500 }}>
        <VictoryArea
          style={{ data: { fill: '#ffcc81' } }}
          data={[
            { x: 1, y: 0.1 },
            { x: 2, y: 1 },
            { x: 3, y: 5 },
            { x: 4, y: 1 },
            { x: 5, y: 0.1 },
          ]}
          interpolation='basis'
        />
      </VictoryChart>
    </>
  );
};

export default AreaChart;
