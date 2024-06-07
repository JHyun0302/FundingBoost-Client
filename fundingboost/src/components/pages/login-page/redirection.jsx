import axios from 'axios';
import HttpsProxyAgent from 'https-proxy-agent';

const httpsAgent = new HttpsProxyAgent({
    host: 'krmp-proxy.9rum.cc',
    port: 3128,
});

const config = {
    httpsAgent,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

const login = async (code) => {
    try {
        const url = `${process.env.REACT_APP_FUNDINGBOOST}/login/oauth2/code/kakao?code=${code}`;
        const response = await axios.get(url, config);

        console.log('Response:', response.data);

        if (response.data.success) {
            const { access_token, refresh_token } = response.data.data;
            if (access_token && refresh_token) {
                const [grantType, token] = access_token.split(' ');

                axios.defaults.headers.common['Authorization'] = token;
                axios.defaults.headers.common['RefreshToken'] = refresh_token;

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
            console.error('Login failed:', response.data.message);
            setLoginError(true);
        }
    } catch (error) {
        console.error('Error during login:', error);
        setLoginError(true);
    }
};
import axios from 'axios';
import HttpsProxyAgent from 'https-proxy-agent';

const httpsAgent = new HttpsProxyAgent({
    host: 'krmp-proxy.9rum.cc',
    port: 3128,
});

const config = {
    httpsAgent,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

const login = async (code) => {
    try {
        const url = `${process.env.REACT_APP_FUNDINGBOOST}/login/oauth2/code/kakao?code=${code}`;
        const response = await axios.get(url, config);

        console.log('Response:', response.data);

        if (response.data.success) {
            const { access_token, refresh_token } = response.data.data;
            if (access_token && refresh_token) {
                const [grantType, token] = access_token.split(' ');

                axios.defaults.headers.common['Authorization'] = token;
                axios.defaults.headers.common['RefreshToken'] = refresh_token;

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
            console.error('Login failed:', response.data.message);
            setLoginError(true);
        }
    } catch (error) {
        console.error('Error during login:', error);
        setLoginError(true);
    }
};
import axios from 'axios';
import HttpsProxyAgent from 'https-proxy-agent';

const httpsAgent = new HttpsProxyAgent({
    host: 'krmp-proxy.9rum.cc',
    port: 3128,
});

const config = {
    httpsAgent,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

const login = async (code) => {
    try {
        const url = `${process.env.REACT_APP_FUNDINGBOOST}/login/oauth2/code/kakao?code=${code}`;
        const response = await axios.get(url, config);

        console.log('Response:', response.data);

        if (response.data.success) {
            const { access_token, refresh_token } = response.data.data;
            if (access_token && refresh_token) {
                const [grantType, token] = access_token.split(' ');

                axios.defaults.headers.common['Authorization'] = token;
                axios.defaults.headers.common['RefreshToken'] = refresh_token;

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
            console.error('Login failed:', response.data.message);
            setLoginError(true);
        }
    } catch (error) {
        console.error('Error during login:', error);
        setLoginError(true);
    }
};
