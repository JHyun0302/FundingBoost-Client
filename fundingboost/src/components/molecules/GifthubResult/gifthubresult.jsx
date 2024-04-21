import React, {Component} from 'react';
import {useEffect} from "react";
import './gifthubresult.scss'
class Gifthubresult extends Component {


    render() {
        return (
            <div className="resultcontainer">
                <div className="price-noti-gifthub">
                    <div className="total-price-noti" > 총 금액 </div>
                <div className="giftbox-total-price">
                    {10000} 원
                </div>
                </div>
                <div className="gifthub-btn-container">
                    <div className="gifthub-purchase-btn-container">
                    <button className="gifthub-purchase-btn"> 구매하기</button>
                    </div>
                    <div className="gifthub-funding-container">
                        <div className="gifthub-noti-font"> ※ 펀딩은 최대 5개까지 가능합니다.</div>
                        <button className="gifthub-funding-btn">펀딩하기</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gifthubresult;