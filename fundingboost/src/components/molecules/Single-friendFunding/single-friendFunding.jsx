import React from 'react';
import './single-friendFunding.scss'
import img from '../../../assets/logo.svg'
import FriendFundingProfileDday from "../../atoms/friendFunding-profile-Dday/friendFunding-profile-Dday";
import FriendFundingItemImg from "../../atoms/friendFunding-itemImg/friendFunding-itemImg";
import GaugeBar from "../../atoms/gauge-bar/gauge-bar";

const SingleFriendFunding = () => {
    return (
        <div className="friendFunding">
            <FriendFundingProfileDday/>

            <FriendFundingItemImg/>
            <div className="friendFunding-gaugeBar">
                <GaugeBar/>
            </div>

            <div className="MyPageFundingGaugeView">
                <div className="gauagePercent">50%</div>
                <div className="gauageBar">
                    <div className="rectangle-wrapper">
                         {/*<Rectangle className="rectangle-30" /> */}
                    </div>
                </div>
            </div>

            {/* <div className="group">*/}
            {/*    <img className="polygon" alt="Polygon" src= {img} />*/}
            {/*</div>*/}
        </div>
    );
};

export default SingleFriendFunding;