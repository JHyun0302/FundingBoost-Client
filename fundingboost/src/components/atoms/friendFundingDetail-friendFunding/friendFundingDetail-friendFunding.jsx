// FriendFundingDetailFriendToFunding 컴포넌트
import React, { useState } from 'react';
import "./friendFundingDetail-friendFunding.scss";
import FriendFundingDetailMoneyButtonGroup from "../button/friendFundingDetail-moneybuttonGroup/friendFundingDetail-moneybuttonGroup";
import GaugeBar from "../gauge-bar/gauge-bar";
import FriendToFundingBtn from "../button/FriendToFundingBtn/FriendToFundingBtn";
import shareicon from "../../../assets/share.svg";

export default function FriendFundingDetailFriendToFunding({ friendFundingDetailData }) {
    const [fundingAmount, setFundingAmount] = useState(0);

    const handleFundingAmountChange = (amount) => {
        console.log("Funding amount changed:", amount);
        setFundingAmount(amount);
    };

    // 펀딩 버튼 클릭 시 실행되는 함수
    const handleFriendToFundingBtnClick = () => {
        console.log("Funding button clicked. Funding amount:", fundingAmount);
        // 펀딩 버튼이 클릭되면 페이지를 이동하고 펀딩 금액을 전달합니다.
    };

    return (
        <div className="friendFundingDetailFriendToFunding">
            <div className="friendFundingDetail-FriendToFunding">
                <div className="friendFundingDetail-FriendToFunding-style1">
                    <div className="fundingToFriend-Text">{friendFundingDetailData?.data?.friendName}님께 펀딩하기</div>
                    <div className="MoneyButtonGroup">
                        <FriendFundingDetailMoneyButtonGroup onFundingAmountChange={handleFundingAmountChange} friendFundingDetailData ={friendFundingDetailData}/>
                    </div>
                </div>
                <div className="friendFundingDetail-FriendToFunding-style2">
                    <div className="friendFundingDetail-fundingInfo">
                        <div className='friendFundingDetail-dDayGroup'>
                            <div className="friendFundingDetail-dDay">{friendFundingDetailData?.data?.deadLineDate}</div>
                            <div className="friendFundingDetail-deadLine">{friendFundingDetailData?.data?.deadline}</div>
                        </div>
                        <div className="friendFundingDetail-totalPercent">{friendFundingDetailData?.data?.contributedPercent}%</div>
                    </div>
                    <div className="friendFundingDetail-gaugeBar">
                        <GaugeBar value={friendFundingDetailData?.data?.contributedPercent} />
                    </div>
                </div>
                <div className="friendFundingDetail-FriendToFunding-style3">
                    <div className="friendFundingDetail-payButton">
                        {/* FriendToFundingBtn 컴포넌트에 onClick prop을 전달합니다. */}
                        <FriendToFundingBtn onClick={handleFriendToFundingBtnClick} fundingAmount={fundingAmount} />
                        <div>
                            <button className="friendFundingDetail-sharebtn">
                                <img alt="shareicon" className="friendFundingDetail-sharebtn" src={shareicon} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
