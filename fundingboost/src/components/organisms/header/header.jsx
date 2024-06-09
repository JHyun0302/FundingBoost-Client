import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';
import logoImg from '../../../assets/logo.svg';
import gifthub from '../../../assets/gifthub.svg';
import { CiSearch } from "react-icons/ci";
import { loginState } from '../../../state/auth';

function HeaderBar() {
    const navigate = useNavigate();
    const login = useRecoilValue(loginState);
    const setLoginState = useSetRecoilState(loginState);
    const [nickName, setNickName] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setNickName(user.nickName);
        }
    }, [login.isAuthenticated]);

    const loginHandler = () => {
        setLoginState(prevState => ({
            ...prevState,
            isAuthenticated: true,
            user: { nickName: 'nick_name' }
        }));
        navigate('/login');
    };

    const logoutHandler = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');

            await axios.post(
                `${process.env.REACT_APP_FUNDINGBOOST}/logout`,
                {},
                {
                    headers: {
                        "Access-Control-Allow-Credentials": true,
                        "Access-Control-Allow-Origin": "http://localhost:3000/",
                        'Authorization': `Bearer ${accessToken}`,
                        'RefreshToken': refreshToken
                    }
                }
            );

            setLoginState(prevState => ({
                ...prevState,
                isAuthenticated: false,
                user: null,
                accessToken: null,
                refreshToken: null
            }));
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('user');
            localStorage.removeItem('GrantType');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('nickName');
            navigate('/home');
        } catch (error) {
            console.error('로그아웃 실패:', error);
            // 오류 처리 로직 추가
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/shopping?search=${searchQuery}`);
        // navigate(`/shopping`);
    };

    return (
        <Navbar expand="lg" className="headerBar">
            <Container fluid>
                <Navbar.Brand href="/home" className="navbar-logo"><img src={logoImg} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="navbarMenu" navbarScroll>
                        <Nav.Link href="/home" className="home-btn">홈</Nav.Link>
                        <Nav.Link href="/friend-funding" className="friend-btn">친구펀딩</Nav.Link>
                        <Nav.Link href="/shopping" className="shopping-btn">쇼핑하기</Nav.Link>
                        <Nav.Link href="/mypage" className="my-btn">MY</Nav.Link>
                    </Nav>

                    <div className="header-search-login">
                        <Form className="searchBar" onSubmit={handleSearchSubmit}>
                            <Form.Control
                                type="search"
                                placeholder="상품을 검색해보세요"
                                className="me-2"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <CiSearch style={{ fontSize: '40px', cursor: 'pointer' }} onClick={handleSearchSubmit} />
                            <Button className="gifthub-btn" href="/gifthub"><img src={gifthub} alt="GiftHub" /></Button>
                        </Form>

                        <div className="loginLogout">
                            {login.isAuthenticated && localStorage.getItem('accessToken') ? (
                                <NavDropdown title={localStorage.getItem('nickName')} id="logoutDropdown" align="end">
                                    <NavDropdown.Item onClick={logoutHandler} className="dropdownItem">로그아웃</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <button onClick={loginHandler} className="login-btn">로그인</button>
                            )}
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderBar;
