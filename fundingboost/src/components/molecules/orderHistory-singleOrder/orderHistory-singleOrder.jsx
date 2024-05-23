import React from 'react';
import './orderHistory-singleOrder.scss';
import logo from '../../../assets/logo.svg';
const OrderHistorySingleOrder = () => {
    return (
        <div className="orderHistorySingleOrder">
            <div className="MyPageOrderHistoryOneView">
                <div className="MyPageOrderHistoryOneGroup">
                    <img className="MyPageOrderHistoryOneEllipse" alt="Ellipse" src={logo}/>
                    <div className="MyPageOrderHistoryOneOverlap">
                        <div className="MyPageOrderHistoryOneText-wrapper-6">2024-04-08(구매날짜)</div>
                        <p className="MyPageOrderHistoryOne-p">[메탈펜촉증정] 엘라고 모나미 153 블라썸 애플펜슬 2세대 실리콘 케이스 (2색상)</p>
                        <div className="MyPageOrderHistoryOneOptionQuantity">
                            <div className="MyPageOrderHistoryOneOption-group">
                                <div className="MyPageOrderHistoryOneOptionMark">
                                    <div className="MyPageOrderHistoryOneOverlap-group">
                                        <div className="MyPageOrderHistoryOneText-wrapper-2">옵션</div>
                                    </div>
                                </div>
                                <div className="MyPageOrderHistoryOneText-wrapper-3">옵션선택어쩌고저쩌고</div>
                            </div>
                            <div className="MyPageOrderHistoryOneOption-group">
                                <div className="MyPageOrderHistoryOneOverlap-wrapper">
                                    <div className="MyPageOrderHistoryOneOverlap-group">
                                        <div className="MyPageOrderHistoryOneText-wrapper-4">수량</div>
                                    </div>
                                </div>
                                <div className="MyPageOrderHistoryOneText-wrapper-5">1</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="MyPageOrderHistoryOneText-wrapper">50,000 원</div>
            </div>
        </div>
    );
};

export default OrderHistorySingleOrder;