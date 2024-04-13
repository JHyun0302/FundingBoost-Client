import React from 'react';
import './footer.scss';
import logo from "../../../assets/logo.png";
import {
    MDBFooter,
    MDBContainer,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="footer-text">
                        <ul className="list-unstyled">
                            <h5>KCS TEAM1 FundingBoost</h5>
                            <br/>
                            <li>About Us : Hyein, Semi, Jaehyun, Taehyung, Inho, ChangHee</li>
                            <li>Address : 서울 금천구 가산디지털1로 189 (주)LG 가산 디지털센터</li>
                            <li>Github : <a
                                href="https://github.com/FundingBoost">https://github.com/FundingBoost</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="icons-row">
                    <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1 '
                    href='https://www.facebook.com/'
                    role='button'
                >
                    <MDBIcon fab className='fab fa-facebook-f' />
                </MDBBtn>

                <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1'
                    href='https://twitter.com/'
                    role='button'
                >
                    <MDBIcon fab className='fa-twitter' />
                </MDBBtn>

                <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1'
                    href='https://www.google.com/'
                    role='button'
                >
                    <MDBIcon fab className='fa-google' />
                </MDBBtn>
                <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1'
                    href='https://www.instagram.com/'
                    role='button'
                >
                    <MDBIcon fab className='fa-instagram' />
                </MDBBtn>

                <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1'
                    href='https://github.com/'
                    role='button'
                >
                    <MDBIcon fab className='fa-github' />
                </MDBBtn>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <p>&copy; 2024 KAKAO CLOUD SCHOOL DEV. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;