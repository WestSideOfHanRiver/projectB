import { ShareIcon, VisibilityIcon } from 'assets';

import styles from './card.module.scss';

import { ICard } from 'routes/main';

interface IProps {
  card: ICard;
}

const Card = ({ card }: IProps) => {
  const { shared, views, url, title } = card;

  return (
    <div className={styles.card}>
      <div className={`${styles.rowFlex} ${styles.spaceBetween}`}>
        <div className={styles.flexStart}>
          <ShareIcon />
          <p>{shared}</p>
        </div>
        <div className={styles.felxEnd}>
          <VisibilityIcon />
          <p>{views}</p>
        </div>
      </div>
      <div className={styles.cardBox}>
        <img src={url} alt='' />
      </div>
      <h3 className={styles.center}>{title}</h3>
    </div>
  );
};

export default Card;
