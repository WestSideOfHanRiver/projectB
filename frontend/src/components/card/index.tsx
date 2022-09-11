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
      <div className={styles.rowFlex}>
        <ShareIcon />
        <p>{shared}</p>
        <VisibilityIcon />
        <p>{views}</p>
      </div>
      <img src={url} alt='' />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
