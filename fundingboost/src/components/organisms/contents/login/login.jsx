import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios 임포트
import '../login/login.scss';
import kakaologin from "../../../../assets/sociallogin/kakaologin.png";
import naverlogin from "../../../../assets/sociallogin/naverlogin.png";
import googlelogin from "../../../../assets/sociallogin/googlelogin.png";
import applelogin from "../../../../assets/sociallogin/applelogin.png";
import logo from "../../../../assets/logo.png";
import loginmoji from "../../../../assets/loginmoji.svg";

const LoginPane = () => {
    const navigate = useNavigate();

    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    const handleLogin = async () => {
        try {
            const data = {
                nickName: nickName,
                password: password,
            };

            const response = await axios.post(`${process.env.REACT_APP_FUNDINGBOOST}/login`, data, {
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Origin': 'http://localhost:3000/',
                    'ngrok-skip-browser-warning': true
                },
                withCredentials: true
            });

            console.log('Response:', response.data);

            // Extract token data from response.data.data
            if (response.data.success) {
                const { access_token, refresh_token} = response.data.data;

                // Ensure the tokens are defined before setting them in localStorage
                if (access_token && refresh_token) {
                    axios.defaults.headers.common['Authorization'] = access_token;
                    axios.defaults.headers.common['RefreshToken'] = refresh_token;

                    window.localStorage.setItem('accessToken', access_token);
                    window.localStorage.setItem('refreshToken', refresh_token);

                    setLoginError(false);
                    navigate('/home');
                } else {
                    console.error('Missing token data:', response.data.data);
                    setLoginError(true);
                }
            } else {
                setLoginError(true);
            }
        } catch (error) {
            console.error('POST 에러:', error);
            setLoginError(true);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    const goSignUp=()=>{
        navigate("/signup");
    }

    return (
        <div className="social-login-pane">
            <div className="social-login-box">
                <h1 className="centerAlign">LOGIN</h1>
                <div className="loginmoji">
                    <img src={loginmoji} alt="loginmoji" />
                </div>
                <div className="login-box">
                    <br/>
                    <div className="input-box">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="아이디"
                            value={nickName}
                            onChange={(e) => setNickName(e.target.value)}
                        />
                        <input
                            type="password"
                            className="input-field"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyDown} // 엔터 키 이벤트 핸들러 추가
                        />
                        {loginError && ( // 로그인 에러 발생 시 메시지 띄우기
                            <p className="error-message">아이디 또는 비밀번호를 다시 확인해주세요.</p>
                        )}
                    </div>
                    <br/>
                    <button className="login-btn-grey" onClick={handleLogin}>로그인</button>
                </div>
                <a href="https://kauth.kakao.com/oauth/authorize" className="social-login-link">
                    <img src={kakaologin} alt="Kakao Login" className="social-login-btn"/>
                </a>
                <a href="https://nid.naver.com/oauth2.0/authorize" className="social-login-link">
                    <img src={naverlogin} alt="Naver Login" className="social-login-btn"/>
                </a>
                <a href="https://accounts.google.com/o/oauth2/auth" className="social-login-link">
                    <img src={googlelogin} alt="Google Login" className="social-login-btn"/>
                </a>
                <a href="https://appleid.apple.com/auth/authorize" className="social-login-link">
                    <img src={applelogin} alt="Apple Login" className="social-login-btn"/>
                </a>

                <h5 className="signup-text">아직 회원이 아니신가요?&nbsp;&nbsp;&nbsp; <button className="signup-btn" onClick={goSignUp} >회원가입</button></h5>
            </div>
        </div>
    );
};

export default LoginPane;