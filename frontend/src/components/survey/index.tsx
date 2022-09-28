import styles from './survey.module.scss';

const Survey = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrap}>
        <a href='/'>
          <div className={styles.imgWrap}>
            <img src='https://pbs.twimg.com/media/BvWm6_lIIAEImlf.jpg' alt='메인 이미지' />
          </div>

          <div className={styles.txtWrap}>
            <small>여행 취향 테스트</small>
            <p>나도 몰랐던 내 취향 여행지는?</p>
            <span>#선한여행력 #갓생살기 #가보자고 #TBTI</span>
            <time>2022.09.26</time>
          </div>

          <button type='button'>시작</button>
        </a>
      </div>

      <div className={styles.userWrap}>
        <div className={styles.nameWrap}>
          <label htmlFor='name'>이름</label>
          <input type='text' id='name' placeholder='이름을 입력해주세요.' />
        </div>
        <div className={styles.ageWrap}>
          <label htmlFor='age'>나이</label>
          <input type='text' id='age' placeholder='이름을 입력해주세요.' />
        </div>
      </div>
    </div>
  );
};

export default Survey;
