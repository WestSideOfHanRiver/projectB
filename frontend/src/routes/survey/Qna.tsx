import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from './survey.module.scss';

const dummySurveys = [
  {
    Q: '무슨 대학에 입학하냐고 묻는 큰아버지, 나의 답변은?',
    A: [
      { id: 1, text: '학교 안 다닐 겁니다. 딸배될거에요.', score: '0' },
      { id: 2, text: '(구라지만) 스카이 가려고 재수하려고요', score: '5' },
      { id: 3, text: '즐', score: '0' },
      { id: 4, text: '개발자가 되기 위해서 성균관대 인공지능학과에 입학했습니다.', score: '20' },
    ],
  },
  {
    Q: '작은 할아버지께서 올해 몇살이고? 라고 물으셨다. 새뱃돈을 많이 받기 위한 올바른 답변은?',
    A: [
      { id: 1, text: '올해 19살입니다.', score: '10' },
      { id: 2, text: '고3 입니다.', score: '20' },
      { id: 3, text: '내년에 대학에 입학합니다.', score: '30' },
    ],
  },
  {
    Q: 'OO이도 얼른 결혼해야지~ 라고 말씀하시는 외숙모, 나의 답변은?',
    A: [
      { id: 1, text: '비혼주의자입니다', score: '0' },
      { id: 2, text: '외숙모는 결혼해서 행복하세요?', score: '0' },
      { id: 3, text: '네 해야죠~ 결혼하면 제사상 제가 다 차릴게요', score: '100' },
    ],
  },
  {
    Q: '첫 취업후, 처음 맞은 대명절. 부모님이 세뱃돈을 주시려고 하신다. 올바른 대답은?',
    A: [
      { id: 1, text: '(손사레를 치며) 아이고, 부보님 쓰세요~', score: '1' },
      { id: 2, text: '(넙죽 받으면) 어머, 감사합니다.', score: '5' },
      { id: 3, text: '이런건 제가 드리는 겁니다!(부모님께 용돈 봉투를 드린다.)', score: '10' },
    ],
  },
];

export interface IAnswer {
  id: number;
  text: string;
  score: string;
  total: number;
}

export interface IScore {
  id: number;
  text: string;
  score: number;
  total: number;
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
      const sumScore = selectedArr.reduce((sum: number, currentValue) => sum + Number(currentValue), 0);

      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/article/result/',
        data: {
          score_data: [sumScore, 'test', '00'],
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
        {dummySurveys[qIdx].A.map(({ id, score, text }) => (
          <button className={styles.answerOption} key={id} type='button' onClick={handleNext} value={score}>
            {text}
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
