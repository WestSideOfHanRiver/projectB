import { SearchIcon } from 'assets';
import { FormEvent, ChangeEvent } from 'react';
import styles from './gnb.module.scss';

interface Props {
  setSelect: Function;
  setFind: Function;
}

const GNB = ({ setSelect, setFind }: Props) => {
  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    setFind(e.currentTarget.value);
  };

  const handleOrder = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.currentTarget.value);
  };

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.leftWrap}>
          <img src='https://static.toss.im/homepage-static/newtoss/toss-logo-2d-white.png' alt='로고' />
        </div>

        <div className={styles.rightWrap}>
          <div className={styles.selectWrap}>
            <select className={styles.select} onChange={handleOrder}>
              <option value='shared'>공유순</option>
              <option value='views'>조회순</option>
            </select>
          </div>

          <div className={styles.searchWrap}>
            <SearchIcon />
            <input className={styles.searchBar} placeholder='검색어를 입력해주세요.' onChange={handleSearch} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default GNB;
