import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Main from 'routes/main';
import GNB from 'routes/gnb';

type selectType = 'shared' | 'views';
const BASE_URL = 'http://127.0.0.1:8000/api/';

const App = () => {
  const [select, setSelect] = useState<selectType>('shared');
  const [find, setFind] = useState('');

  useEffect(() => {
    const getApi = async () => {
      const res = await axios.get(BASE_URL);
    };
    getApi();
  }, []);

  return (
    <div className='App'>
      <GNB setSelect={setSelect} setFind={setFind} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main select={select} find={find} />} />
          <Route path='*' element={<div>Page Not Found 잘생겼다 완석님</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
