import styles from './login.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [checked, setChecked] = useState(() => {
    const savedIdData = localStorage.getItem('idData');
    if (savedIdData === null) {
      return false;
    }
    return JSON.parse(savedIdData).checked;
  });
  const [inputId, setInputId] = useState(() => {
    const savedIdData = localStorage.getItem('idData');
    if (savedIdData === null) {
      return '';
    }
    return JSON.parse(savedIdData).idData;
  });
  const [inputPw, setInputPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputVal = e.target.value;
    console.log('인풋상태', inputVal);
    setErrorMessage('');

    console.log(errorMessage);
    return setInputId(inputVal);
  };

  const handleInputPw: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    return setInputPw(e.target.value);
  };

  // 아이디 저장
  // const [saveId, setSaveId] = useState(false);

  const handleSaveId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked(e.target.checked);
    if (inputId !== '' && e.target.checked === true) {
      localStorage.setItem('idData', JSON.stringify({ idData: inputId, checked: true }));
    }
    if (e.target.checked === false) {
      localStorage.removeItem('idData');
    }
  };

  // login 버튼 클릭 이벤트
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    if (inputId === '') {
      setErrorMessage('아이디를 입력해주세요.');
      return;
    }
    if (inputPw === '') {
      setErrorMessage('비밀번호를 입력해주세요.');
      return;
    }
    console.log('click login');

    const loginFormObj = document.querySelector('.txtWrap>form');
  };

  return (
    <div className={styles.container}>
      <div className={styles.userWrap}>
        <div className={styles.txtWrap}>
          <h2>Login</h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.inputWrap}>
            <label htmlFor='input_id'>ID</label>
            <input
              type='text'
              id='name'
              name='input_id'
              value={inputId}
              onChange={handleInputId}
              placeholder='아이디를 입력해주세요.'
              required
            />
            <p
              onChange={handleInputId}
              style={{
                textAlign: 'center',
                color: 'red',
              }}
            >
              {errorMessage}
            </p>
          </div>
          <div className={styles.inputWrap}>
            <label htmlFor='input_pw'>PASSWORD</label>
            <input
              type='password'
              name='input_pw'
              id='password'
              value={inputPw}
              onChange={handleInputPw}
              placeholder='비밀번호를 입력해주세요.'
              required
            />
          </div>
          <div>
            <input type='checkbox' name='save_id' id='save_id' onChange={handleSaveId} checked={checked} />
            <label htmlFor='save_id'>아이디 저장</label>
            <input
              type='checkbox'
              name='keep_login'
              id='keep_login'
              // onChange={handleSave} checked={isRemember}
            />
            <label htmlFor='keep_login'>로그인 상태 유지</label>
          </div>
          <button type='submit' className={styles.btn}>
            login
          </button>
          {/* <button type='submit' className={styles.btn}>
            회원가입
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
