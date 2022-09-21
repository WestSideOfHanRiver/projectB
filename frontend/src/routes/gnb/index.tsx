/* eslint-disable react/destructuring-assignment */
import Header from 'components/header';

interface GNBProps {
  setSelect: any;
  setFind: any;
}

const GNB = ({ setSelect, setFind }: GNBProps) => {
  return (
    <div>
      <Header setSelect={setSelect} setFind={setFind} />
    </div>
  );
};

export default GNB;
