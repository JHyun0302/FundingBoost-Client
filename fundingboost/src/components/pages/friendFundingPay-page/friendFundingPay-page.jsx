import React from 'react';
import { useLocation } from 'react-router-dom';
import PointUse from '../../atoms/point/pointUse';
import './friendFundingPay-page.scss'
import img from '../../../assets/logo.svg';



const FriendFundingPayPage = () => {
    const location = useLocation();
    const fundingAmount = location.state;
    return (
        <div className="friendFundingPayPage">
            <div className="friend-funding-profile">
                <img className="friend-funding-profile-image" alt="Ellipse" src={img}/>
                <div className="friend-funding-profile-name">구정은</div>
                <div className="friend-funding-profile-text">님에게 펀딩하기</div>
            </div>
            <div className="friend-funding-total-price">
                <div className="friend-funding-total-price-row">
                    <div className="friend-funding-total-price-first-text">친구의 펀딩 총 금액</div>
                    <div className="friend-funding-total-price-second-text">15,000,000</div>
                </div>
                <div className="friend-funding-total-price-row">
                    <div className="friend-funding-total-price-first-text">현재 펀딩완료 금액</div>
                    <div className="friend-funding-total-price-second-text">3,270,000</div>
                </div>
                <div className="friend-funding-total-price-row">
                    <div className="friend-funding-total-price-first-text">최대 펀딩 가능 금액</div>
                    <div className="friend-funding-total-price-second-text">11,730,000</div>
                </div>
            </div>
            <PointUse/>

        </div>

    );

};

export default FriendFundingPayPage;
