import styles from './login.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputVal = e.target.value;
    console.log('인풋상태', inputVal);
    setErrorMessage('');
    if (inputVal.length < 5 || inputVal === '') {
      setErrorMessage('5글자 이상 입력해야 합니다.');
    }
    console.log(errorMessage);
    return setInputId(inputVal);
  };

  const handleInputPw: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    return setInputPw(e.target.value);
  };

  // 아이디 저장

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
  };

  return (
    <div className={styles.container}>
      <div className={styles.userWrap}>
        <div className={styles.txtWrap}>
          <h2>Login</h2>
        </div>
        <form>
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
          <input
            type='checkbox'
            name='save_id'
            // onChange={handleSave} checked={isRemember}
          />
          아이디 저장
          <input type='checkbox' name='keep_login' />
          로그인 상태 유지
          <button type='submit' onSubmit={onSubmit} className={styles.btn}>
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
