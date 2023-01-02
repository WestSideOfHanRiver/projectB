import { FormEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { userState } from 'atoms/userAtom';

import styles from './survey.module.scss';

export interface Props {
  handleClick: () => void;
}

const Info = ({ handleClick }: Props) => {
  const [user, setUser] = useRecoilState(userState);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = e.currentTarget.userName.value;
    const age = e.currentTarget.userAge.value;

    setUser({ name, age });

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
          <input type='text' name='userName' id='name' placeholder='이름을 입력해주세요.' required />
        </div>
        <div className={styles.inputWrap}>
          <label htmlFor='age'>나이</label>
          <input type='number' name='userAge' id='age' placeholder='나이을 입력해주세요.' pattern='[0-9]+' required />
        </div>

        <button type='submit' className={styles.nextBtn}>
          다음
        </button>
      </form>
    </div>
  );
};

export default Info;
