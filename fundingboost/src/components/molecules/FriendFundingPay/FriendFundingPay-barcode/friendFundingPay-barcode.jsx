import React from 'react';
import img from "../../../../assets/logo.svg";
import barcodeImage from "../../../../assets/friendFunding/barcode-image.svg";
import FriendFundingPaymentBtn from "../../../atoms/button/friendfundingPaymentBtn/friendfundingPaymentBtn";
import './friendFundingPay-barcode.scss';

const FriendFundingPayBarcode = ({friendFundingPayData,finalPrice, fundingAmount, usePoints,fundingId}) => {
console.log("바코드: " + fundingId)
    return (
        <div className="friend-funding-bar-code">

            <div className="friend-funding-bar-code-image">
                <img src={barcodeImage} className="barcodeImg"/>
            </div>


            <div className="friend-funding-bar-code-text">
                <div className="friend-funding-bar-code-price">₩&nbsp;&nbsp;&nbsp;&nbsp;{finalPrice}</div>
                <FriendFundingPaymentBtn className="friend-funding-bar-code-button" fundingAmount={fundingAmount} usePoints={usePoints} fundingId={fundingId} />
            </div>

        </div>
    );
};

export default FriendFundingPayBarcode;