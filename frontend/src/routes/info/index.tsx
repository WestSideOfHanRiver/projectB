import { ArrowIcon } from 'assets';

import styles from './info.module.scss';

const INFO = () => {
  return (
    <div className={styles.infoWrap}>
      <div className={styles.userWrap}>
        <h3>마이페이지</h3>
        <div className={styles.detailWrap}>
          <img src='' alt='사용자 이미지' />

          <div className={styles.nameWrap}>
            <p className={styles.title}>별명</p>
            <ArrowIcon />
          </div>
        </div>

        <hr />

        <ul className={styles.rankWrap}>
          <li>
            <p className={styles.title}>별명</p>
            <h4>Lv.3</h4>
          </li>
          <li>
            <p className={styles.title}>별명</p>
            <h4>Lv.3</h4>
          </li>
          <li>
            <p className={styles.title}>별명</p>
            <h4>Lv.3</h4>
          </li>
        </ul>

        <div className={styles.addSection}>광고 영역</div>

        <div className={styles.listWrqp}>
          <h3>내가 참여한 게임 리스트</h3>
          <ul>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
            <li>test4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default INFO;
