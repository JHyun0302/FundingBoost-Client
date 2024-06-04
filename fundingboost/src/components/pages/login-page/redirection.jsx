import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {useRecoilState} from "recoil";
import {loginState, nickNameState} from "../../../state/auth";

const Redirection = () => {
    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();
    const [nickName, setNickName] = useRecoilState(nickNameState);
    const [login, setLoginState] = useRecoilState(loginState);
    const [loginError, setLoginError] = useState(false);
    console.log(code);

    useEffect(() => {
        const login = async () => {
            if (!code) return;

            try {
                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/login/oauth2/code/kakao?code=${code}`, {
                    responseType: 'json',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': true,
                        'Access-Control-Allow-Origin': 'http://localhost:3000/'
                    },
                    withCredentials: true,
                });


                if(response.data.data ==null){
                    console.error("response error");
                };


                console.log('Response:', response.data);

                if (response.data.success) {
                    const { access_token, refresh_token } = response.data.data;

                    if (access_token && refresh_token) {
                        const [grantType, token] = access_token.split(' ');

                        axios.defaults.headers.common['Authorization'] = token;
                        axios.defaults.headers.common['RefreshToken'] = refresh_token;

                        // 로그인 상태와 토큰을 localStorage에 저장
                        localStorage.setItem('isAuthenticated', 'true');
                        localStorage.setItem('user', JSON.stringify({ nickName }));
                        localStorage.setItem('GrantType', grantType);
                        localStorage.setItem('accessToken', token);
                        localStorage.setItem('refreshToken', refresh_token);

                        setLoginState({
                            isAuthenticated: true,
                            user: { nickName },
                            GrantType: grantType,
                            accessToken: token,
                            refreshToken: refresh_token,
                        });

                        setLoginError(false);
                        navigate('/home');
                    } else {
                        console.error('Missing token data:', response.data.data);
                        setLoginError(true);
                    }
                } else {
                    setLoginError(true);
                }

                navigate('/');
            } catch (error) {
                console.error(error);
                console.log('로그인 실패');
            }
        };
        login();
    }, [code, navigate]);

    return <div></div>;
};

export default Redirection;
