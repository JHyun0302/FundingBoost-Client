import ProfileImg from "../../../atoms/ProfileImg/ProfileImg";

import CheckFundingButton   from "../../../atoms/button/mainMyfuudingBtn/checkFunding-btn";
import React, { useState } from "react";
import ItemImg from "../../../atoms/itemImg/itemImg";
import GaugeBar from "../../../atoms/gauge-bar/gauge-bar";

import './memberYesFunding.scss'

function MainMyFunding() {
    const [nickName, setNickName] = useState('');
    return (
        <div className="memberYesFunding">
            <div className="a">
                <div className="b">
                    <ProfileImg className="memberYesFunding-Profile"></ProfileImg>
                    <div className="memberYesFunding-item">

                        <div className="memberYesFunding-text">
                            <div className="myfundingNickName">{nickName} 님</div>
                            펀딩 현황
                        </div>
                        <div className="memberFundingDday">D-</div>
                        <div className="memberFunding-RightItem">
                            <div className="memberFundingProgress">%</div>
                        </div>
                        <CheckFundingButton/>
                    </div>
                </div>

                <div className="myFundingItemsContainer">
                    <div className="myFundingItem">
                        <ItemImg className="myFundingItemimg"/>
                        <GaugeBar className="myFundingGaugeBar"/>
                    </div>
                    <div className="myFundingItem">
                        <ItemImg className="myFundingItemimg"/>
                        <GaugeBar className="myFundingGaugeBar"/>
                    </div>
                    <div className="myFundingItem">
                        <ItemImg className="myFundingItemimg"/>
                        <GaugeBar className="myFundingGaugeBar"/>
                    </div>
                    <div className="myFundingItem">
                        <ItemImg className="myFundingItemimg"/>
                        <GaugeBar className="myFundingGaugeBar"/>
                    </div>
                    <div className="myFundingItem">
                        <ItemImg className="myFundingItemimg"/>
                        <GaugeBar className="myFundingGaugeBar"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainMyFunding;