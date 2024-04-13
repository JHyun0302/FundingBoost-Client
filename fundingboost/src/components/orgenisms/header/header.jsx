import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';

import  logoImg from '../../../assets/logo.svg'
import gifthub from '../../../assets/gifthub.svg'
// import { CiSearch } from "react-icons/ci";

//헤더 네이게이션바
function HeaderBar() {
    return (
        <Navbar expand="lg" className="headerBar">
            <Container fluid>
                <Navbar.Brand href="/" className="navbar-logo"><img src ={logoImg}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="navbarmemu" navbarScroll>
                        <Nav.Link href="/home" className="home-btn" >홈</Nav.Link>
                        <Nav.Link href="/friendfunding" className="friend-btn">친구펀딩</Nav.Link>
                        <Nav.Link href="/shopping" className="shopping-btn">쇼핑하기</Nav.Link>
                        <Nav.Link href="/mypage" className="my-btn">MY</Nav.Link>
                    </Nav>
                    <Form className="seachbar">
                        <Form.Control type="search" placeholder="상품을 검색해보세요"
                                      className="me-2"
                                      aria-label="Search"

                        />
                        <Button className="gifthub-btn" href="/gifthub"><img src={gifthub}/></Button>
                        <div className="login-btn">
                            <NavDropdown title="로그인" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">로그아웃</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderBar;

