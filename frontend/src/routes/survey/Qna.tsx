import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from './survey.module.scss';

const dummySurveys = [
  {
    Q: '1',
    A: [
      { id: 1, text: '1-1' },
      { id: 2, text: '2-1' },
      { id: 3, text: '3-1' },
    ],
  },
  {
    Q: '2',
    A: [
      { id: 1, text: '2-1' },
      { id: 2, text: '2-2' },
      { id: 3, text: '2-3' },
    ],
  },
  {
    Q: '3',
    A: [
      { id: 1, text: '3-1' },
      { id: 2, text: '3-2' },
      { id: 3, text: '3-3' },
    ],
  },
];

export interface IAnswer {
  id: number;
  text: string;
}

const Qna = () => {
  const [qIdx, setqIdx] = useState(0);
  const [selectedArr, setSelectedArr] = useState<string[]>([]);

  const navigator = useNavigate();

  const handleNext = (e: any) => {
    const selectedAnswerIndex = e.currentTarget.value;
    setSelectedArr((prev) => [...prev, selectedAnswerIndex]);

    if (qIdx < dummySurveys.length - 1) {
      setqIdx((prevIdx) => prevIdx + 1);
    }
  };

  const handlePrev = () => {
    if (qIdx > 0) {
      setqIdx((prevIdx) => prevIdx - 1);
    }
  };

  useEffect(() => {
    if (selectedArr.length === dummySurveys.length) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/article/result/',
        data: {
          // name: 'asdf',
          age: '23',
          scores: selectedArr,
        },
      });

      navigator('/result');
    }
  }, [selectedArr]);

  return (
    <div className={styles.qnaWrap}>
      <div className={styles.qWrap}>
        <small>Q{qIdx + 1}.</small>
        <h2>{dummySurveys[qIdx].Q}</h2>
      </div>

      <div className={styles.aWrap}>
        {dummySurveys[qIdx].A.map((answer: IAnswer, index) => (
          <button className={styles.answerOption} key={answer.id} type='button' onClick={handleNext} value={index}>
            {answer.text}
          </button>
        ))}
      </div>

      <small>세상에 &#62; 이런일이 있다니</small>

      <div className={styles.btnArea}>
        {qIdx > 0 && (
          <button type='button' className={styles.prevBtn} onClick={handlePrev}>
            이전
          </button>
        )}
        <button type='button' className={styles.nextBtn} onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Qna;
