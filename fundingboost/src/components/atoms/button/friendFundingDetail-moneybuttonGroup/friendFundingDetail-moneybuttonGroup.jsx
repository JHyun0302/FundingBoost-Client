import React, { useState } from 'react';
import './friendFundingDetail-moneybuttonGroup.scss'

const FriendFundingDetailMoneybuttonGroup = ({ onFundingAmountChange }) => {
    const [fundingAmount, setFundingAmount] = useState(0);

    // 버튼을 통한 금액 입력
    const handleMoneyButtonClick = (amount) => {
        const newAmount = parseInt(fundingAmount) + amount;
        setFundingAmount(newAmount);
        onFundingAmountChange(newAmount);
    };


    //사용자가 직접 금액 입력
    const handleMoneyInputChange = (event) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/\D/g, '');  //문자입력제한
        const newAmount = numericValue === "" ? 0 : parseInt(numericValue);
        setFundingAmount(newAmount);
        onFundingAmountChange(newAmount);
    };


    //숫자 형식 천단위 ","
    const formattedFundingAmount = fundingAmount ? parseInt(fundingAmount).toLocaleString() : "펀딩할 금액을 입력해 주세요";

    return (
        <div className="fundingToFriend-buttonGroup">
            <input type="text" className="fundingToFriend-textBox" placeholder="펀딩할 금액을 입력해 주세요."
                   value={formattedFundingAmount === "펀딩할 금액을 입력해 주세요" ? "" : formattedFundingAmount}
                   onChange={handleMoneyInputChange}/>
            <div className="friendFundingDetail-moneybuttonGroup">
                <div className="money">
                    <button className="moneyButton" onClick={() => handleMoneyButtonClick(10000)}>+ 1만</button>
                </div>
                <div className="money">
                    <button className="moneyButton" onClick={() => handleMoneyButtonClick(50000)}>+ 5만</button>
                </div>
                <div className="money">
                    <button className="moneyButton" onClick={() => handleMoneyButtonClick(100000)}>+ 10만</button>
                </div>
                <div className="money">
                    <button className="moneyButton">+ 전액</button>
                </div>
            </div>

        </div>
    );
};

export default FriendFundingDetailMoneybuttonGroup;