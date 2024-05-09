import React from 'react';
import "./friendFundingDetail-friendFunding.scss";
import FriendFundingDetailMoneyButtonGroup
    from "../button/friendFundingDetail-moneybuttonGroup/friendFundingDetail-moneybuttonGroup";
import GaugeBar from "../gauge-bar/gauge-bar";
import FriendToFundingBtn from "../button/FriendToFundingBtn/FriendToFundingBtn";
import shareicon from "../../../assets/share.svg";

export default function FriendFundingDetailFriendToFunding ({friendFundingDetailData}) {
    return (
        <div className="friendFundingDetailFriendToFunding">
            <div className="friendFundingDetail-FriendToFunding">
                <div className="friendFundingDetail-FriendToFunding-style1">
                    <div className="fundingToFriend-Text">{friendFundingDetailData?.data?.nickName}님께 펀딩하기</div>
                    <input type="text" className="fundingToFriend-textBox" placeholder="펀딩할 금액을 입력해 주세요."/>
                    <div className="MoneyButtonGroup">
                        <FriendFundingDetailMoneyButtonGroup/>
                    </div>
                </div>

                <div className="friendFundingDetail-FriendToFunding-style2">
                    <div className="friendFundingDetail-fundingInfo">
                        <div className='friendFundingDetail-dDayGroup'>
                            <div className="friendFundingDetail-dDay">D - 3</div>
                            <div className="friendFundingDetail-deadLine">{friendFundingDetailData?.data?.deadline}</div>
                        </div>
                        <div className="friendFundingDetail-totalPercent">{friendFundingDetailData?.data?.contributedPercent}%</div>
                    </div>
                    <div className="friendFundingDetail-gaugeBar">
                        <GaugeBar value ={friendFundingDetailData?.data?.contributedPercent}/>
                    </div>
                </div>

                <div className="friendFundingDetail-FriendToFunding-style3">
                    <div className="friendFundingDetail-payButton">
                        <FriendToFundingBtn className="fundingButton"/>
                        <div>
                            <button className="friendFundingDetail-sharebtn">
                                <img alt="shareicon" className="friendFundingDetail-sharebtn" src={shareicon}/>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};
