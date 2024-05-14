import React from 'react';
import img from "../../../../assets/logo.svg";
import barcodeImage from "../../../../assets/friendFunding/barcode-image.svg";
import FriendFundingPaymentBtn from "../../../atoms/button/friendfundingPaymentBtn/friendfundingPaymentBtn";
import './FriendFundingPay-CurrentPay.scss';

const FriendFundingPayCurrentPay = ({friendFundingPayData}) => {

    return (
        <div className="friend-funding-price-current-pay">
            <div className="friend-funding-price-current-pay-fixed-text">결제 금액</div>
            <div className="friend-funding-price-current-pay-div">
                <div className="friend-funding-price-current-pay-text">
                    <div>펀딩한 금액</div>
                    <div>50,000</div>
                </div>
                <div className="friend-funding-price-current-pay-div">
                    <div>사용 포인트</div>
                    <div>-30,000</div>
                </div>
                <div className="friend-funding-price-current-pay-div">
                    <div>결제할 금액</div>
                    <div>20,000</div>

                </div>
            </div>
        </div>
    );
};

export default FriendFundingPayCurrentPay;