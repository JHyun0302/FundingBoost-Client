import React, { useState } from 'react';
import './friendFundingDetail-moneybuttonGroup.scss'

const FriendFundingDetailMoneybuttonGroup = () => {
    const [fundingAmount, setFundingAmount] = useState(0);

    // 금액 버튼 클릭
    const handleMoneyButtonClick = (amount) => {
        setFundingAmount(prevAmount => (parseInt(prevAmount) + amount).toString());
    };
    //사용자가 직접 버튼 입력
    const handleMoneyInputChange = (event) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/\D/g, '');  //문자입력제한
        setFundingAmount(numericValue === "" ? 0 : parseInt(numericValue));
    };

    //숫자 형식 천단위 ,
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