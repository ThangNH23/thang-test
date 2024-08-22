import React, { useState } from 'react';
import './Register.scss';
import { SiNaver } from "react-icons/si";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = (e) => {
    const email = e.target.value;
    setEmail(email);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (e) => {
    const password = e.target.value;
    setPassword(password);

    if (password.length === 0) {
      setPasswordError('Password is required');
    } else if (password.length < 8 || password.length > 12) {
      setPasswordError('Password must be 8-12 characters long');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);

    if (confirmPassword.length === 0) {
      setConfirmPasswordError('Confirm Password is required');
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      hasError = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      hasError = true;
    }
    if (hasError) {
      return;
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='header_main'>
          <div className='header_main_title'>
            <p>What happened</p>
          </div>
          <div className='header_main_content'>
            <a href='#'>INTRODUCTION</a>
            <a href='#'>SOLUTION</a>
            <a href='#'>RATE PLAN</a>
            <a>|</a>
            <Link to='/Login'>LOGIN</Link>
            <a href='#'>APPLY FOR FREE USE</a>
          </div>
        </div>
      </div>
      <div className='body_container'>
        <div className='body'>
          <div className='body_title'>
            <p>JOIN US</p>
            <div className='underline'></div>
          </div>
          <form className='body_content' onSubmit={handleSubmit}>
            <div className='email form-control'>
              <p>아이디(이메일)*</p>
              <input
                className="input-form"
                type='text'
                name='email'
                value={email}
                onChange={validateEmail}
                placeholder='example@gmail.com'
              />
              {emailError && <p className='error'>{emailError}</p>}
            </div>

            <div className='password form-control'>
              <p>비밀번호 *</p>
              <input
                className="input-form"
                type='password'
                name='password'
                value={password}
                onChange={validatePassword}
                placeholder='영문, 숫자, 특수문자를 포함한 8~12자리'
              />
              {passwordError && <p className='error'>{passwordError}</p>}
            </div>

            <div className='verify_password form-control'>
              <p>비밀번호 확인 *</p>
              <input
                className="input-form"
                type='password'
                name='verify-password'
                value={confirmPassword}
                onChange={validateConfirmPassword}
              />
              {confirmPasswordError && <p className='error'>{confirmPasswordError}</p>}
            </div>

            <div className='address form-control'>
              <p>주소</p>
              <div className='input-container'>
                <input className="input-form" type='text' name='address'></input>
                <span>검색</span>
              </div>
            </div>

            <div className='additional-address form-control'>
              <input className="input-form" type='text' name='additional-address' placeholder='추가 주소'></input>
            </div>

            <div className='contact form-control'>
              <p>연락처</p>
              <input className="input-form" type='text' name='contact'></input>
            </div>
            <div className='line'></div>
            <div className='policy'>
              <div className='policy-1'>
                <input type='checkbox'></input>
                <p> <p style={{ color: '#659bf5' }}>이용약관 </p> 및 <p style={{ color: '#659bf5' }}>개인정보 처리 방침 </p> 에 동의합니다. (필수)</p>
              </div>
              <div className='policy-1'>
                <input type='checkbox'></input>
                <p>광고 및 메일 수신에 동의합니다. (선택)</p>
              </div>
            </div>
            <div className='register-form form-control'>
              <button type='submit'>가입하기</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-container">
        <div className='footer-info'>
          <div className='footer-1'>
            <div className="footer-section">
              <h3>what happened</h3>
              <ul>
                <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                <li>[공지] 29CM 강남 스토어 영업 종료</li>
                <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                <li>[공지] IOS 10 이하 버전 지원 중단 안내</li>
                <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
              </ul>
            </div>
          </div>
          <div className='footer-2'>
            <div className="footer-section">
              <h3>about us</h3>
              <ul>
                <li>회사 소개</li>
                <li>인재 채용</li>
                <li>상시 할인 혜택</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>my order</h3>
              <ul>
                <li>내 주문</li>
                <li>주문 배송</li>
                <li>취소 / 교환 / 반품 내역</li>
                <li>상품 리뷰 내역</li>
                <li>증빙 서류 발급</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>my account</h3>
              <ul>
                <li>회원 정보 수정</li>
                <li>회원 등급</li>
                <li>마일리지 현황</li>
                <li>쿠폰</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>help</h3>
              <ul>
                <li>1:1 상담 내역</li>
                <li>상품 Q & A 내역</li>
                <li>공지 사항</li>
                <li>자주하는 질문</li>
                <li>고객의 소리</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-detail'>
          <div className='footer-general'>
            <p>© 2020-2021 what happened corp | (주) 왓츠핸픈 | 대표자: 홍길동 | 사업자 등록번호: 356-00-00000 | test0101@what happened.co.kr 서울특별시 강남구 도산대로 8길 17 | FAX: 070-0000-0000 | 서비스 이용약관 | 개인정보처리방침</p>
          </div>
          <div className='footer-social'>
            <div className="social-icons">
              <div className="icon naver"><SiNaver /></div>
              <div className="icon facebook"><FaFacebookF /></div>
              <div className="icon google"><FaInstagram /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
