import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.selectWrap}>
        <select className={styles.select}>
          <option value='view'>조회순</option>
          <option value='comment'>댓글순</option>
          <option value='share'>공유순</option>
        </select>
      </div>

      <div className={styles.searchWrap}>
        <input className={styles.searchBar} placeholder='검색어를 입력해주세요.' />
      </div>
    </div>
  );
};

export default Header;
