import React from 'react';
import './single-friendFunding.scss'
import img from '../../../assets/logo.svg'
import FriendFundingProfileDday from "../../atoms/friendFunding-profile-Dday/friendFunding-profile-Dday";
import FriendFundingItemImg from "../../atoms/friendFunding-itemImg/friendFunding-itemImg";
import GaugeBar from "../../atoms/gauge-bar/gauge-bar";

const SingleFriendFunding = ({friendFundingData}) => {

    return (

        <div className="friendFunding">
            <div className="friendFunding-row">
                <div className="friendFunding-itemlist">
                        {friendFundingData?.data?.map((fundingData, index) => (
                                <div className="friendFunding-Background">
                                    <div className="friendFunding-Background-left">
                                        <div key={index} className="friendFundingDetail">
                                            <FriendFundingProfileDday friendFundingData={fundingData}/>
                                            <FriendFundingItemImg friendFundingData={fundingData}/>
                                            <div className="friendFunding-gaugeBar">
                                                <GaugeBar value={fundingData.friendFundingPercent}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="friendFunding-Background-right">
                                        <div className="friendFundingbtn"></div>
                                    </div>
                            </div>
                                ))}

                            </div>

                            </div>
        </div>

    );
};

export default SingleFriendFunding;