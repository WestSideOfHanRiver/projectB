import styles from './survey.module.scss';

export interface Props {
  handleClick: () => void;
}

const Info = ({ handleClick }: Props) => {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.imgWrap}>
        <img src='https://pbs.twimg.com/media/BvWm6_lIIAEImlf.jpg' alt='메인 이미지' />
      </div>

      <div className={styles.txtWrap}>
        <small>여행 취향 테스트</small>
        <p>나도 몰랐던 내 취향 여행지는?</p>
        <span>#선한여행력 #갓생살기 #가보자고 #TBTI</span>
        <time>2022.09.26</time>
      </div>

      <button type='button' onClick={handleClick} className={styles.nextBtn}>
        시작
      </button>
    </div>
  );
};

export default Info;
