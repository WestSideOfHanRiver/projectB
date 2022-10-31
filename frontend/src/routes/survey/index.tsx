import { useState, MouseEvent } from 'react';

import styles from './survey.module.scss';

import Intro from './Intro';
import Info from './Info';
import Qna from './Qna';

const Survey = () => {
  const [Idx, setIdx] = useState(0);

  const handleClick = () => {
    setIdx((prevIdx) => prevIdx + 1);
  };

  return (
    <div className={styles.container}>
      <input type='hidden' id='userName' value='사람이름' />
      <input type='hidden' id='userAge' value='' />

      {Idx === 0 && <Intro handleClick={handleClick} />}
      {Idx === 1 && <Info handleClick={handleClick} />}
      {Idx === 2 && <Qna />}
    </div>
  );
};

export default Survey;
