import React from 'react'
import './Login.scss';
import { SiNaver } from "react-icons/si";
import { BsChatFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Login = () => {
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
                        <a href='#'>LOGIN</a>
                        <a href='#'>APPLY FOR FREE USE</a>
                    </div>
                </div>
            </div>
            <div className='body_container'>
                <div className='body'>
                    <div className='body_title'>
                        <p>Welcome</p>
                        <div className='underline'></div>
                    </div>
                    <div className='body_content'>
                        <div className='email form-control'>
                            <input className="input-form" type='text' name='email' placeholder='아이디 (이메일)'></input>
                        </div>

                        <div className='password form-control'>
                            <input className="input-form" type='text' name='password' placeholder='비밀번호'></input>
                        </div>

                        <div className='register'>
                            <button>가입하기</button>
                        </div>

                        <div className='another-login'>
                            <p>SNS 계정으로 로그인</p>
                        </div>

                        <div className='social-icons-login'>
                            <div className="icon naver"><SiNaver /></div>
                            <div className="icon BsChatFill"><BsChatFill/></div>
                            <div className="icon FaFacebookF"><FaFacebookF /></div>
                            <div className="icon google"><FaGooglePlusG /></div>
                        </div>

                        <div className='register-two'>
                            <button>계정이 없으신가요? 간편가입하기</button>
                        </div>

                        <div className='find-info'>
                            <a href='#' className='find-email'>아이디(이메일)찾기</a>
                            <a href='#' className='find-password'>비밀번호 찾기</a>
                        </div>
                    </div>
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
    )
}

export default Login
