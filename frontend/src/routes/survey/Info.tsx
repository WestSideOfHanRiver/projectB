import { FormEvent } from 'react';

import styles from './survey.module.scss';

export interface Props {
  handleClick: () => void;
}

const Info = ({ handleClick }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 정규식
    // alert('제출');
    (document.getElementById('userName') as HTMLInputElement).value = (
      document.getElementById('name') as HTMLInputElement
    ).value;

    (document.getElementById('userAge') as HTMLInputElement).value = (
      document.getElementById('age') as HTMLInputElement
    ).value;

    handleClick();
  };

  return (
    <div className={styles.userWrap}>
      <div className={styles.imgWrap}>
        <img src='https://pbs.twimg.com/media/BvWm6_lIIAEImlf.jpg' alt='메인 이미지' />
      </div>
      <div className={styles.txtWrap}>
        <h2>
          이제부터,
          <br />
          개인정보는 제것입니다.
        </h2>
        <span>토스커뮤니티는 모두가 같은 목표를 향해 달립니다. 불가능한 것을 꿈꾸고</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputWrap}>
          <label htmlFor='name'>이름</label>
          <input type='text' id='name' placeholder='이름을 입력해주세요.' required />
        </div>
        <div className={styles.inputWrap}>
          <label htmlFor='age'>나이</label>
          <input type='number' id='age' placeholder='나이을 입력해주세요.' pattern='[0-9]+' required />
        </div>

        <button type='submit' className={styles.nextBtn}>
          다음
        </button>
      </form>
    </div>
  );
};

export default Info;
