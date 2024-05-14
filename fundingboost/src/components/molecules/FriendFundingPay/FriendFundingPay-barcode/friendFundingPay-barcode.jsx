import React from 'react';
import img from "../../../../assets/logo.svg";
import barcodeImage from "../../../../assets/friendFunding/barcode-image.svg";
import FriendFundingPaymentBtn from "../../../atoms/button/friendfundingPaymentBtn/friendfundingPaymentBtn";
import './friendFundingPay-barcode.scss';

const FriendFundingPayBarcode = ({friendFundingPayData}) => {

    return (
        <div className="friend-funding-bar-code">

            <div className="friend-funding-bar-code-image">
                <img src={barcodeImage}/>
            </div>


            <div className="friend-funding-bar-code-text">
                <div className="friend-funding-bar-code-price">₩&nbsp;&nbsp;&nbsp;&nbsp;20,000원</div>
                <FriendFundingPaymentBtn className="friend-funding-bar-code-button"/>
            </div>

        </div>
    );
};

export default FriendFundingPayBarcode;