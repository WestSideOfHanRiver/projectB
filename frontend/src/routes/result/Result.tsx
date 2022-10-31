import React from 'react';
import { Link } from 'react-router-dom';

import { AreaChart } from './chart';

const Result = () => {
  return (
    <>
      <h1>Result</h1>
      <div>
        <AreaChart score={72} />
      </div>
      <div>
        <button type='button'>테스트 다시하기</button>
        <button type='button'>통계 보러가기</button>
        <Link to='/'>
          <button type='button'>다른 테스트</button>
        </Link>
      </div>
    </>
  );
};

export default Result;
