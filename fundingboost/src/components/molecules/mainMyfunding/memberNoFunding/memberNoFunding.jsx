import ProfileImg from "../../../atoms/ProfileImg/ProfileImg";
import StartFundingButton  from "../../../atoms/button/mainMyfuudingBtn/startFunding-btn";
import React, { useState } from "react";

import './memberNoFunding.scss'

function MainMyFunding() {
    const [nickName, setNickName] = useState('');
    return (
        <div className="memberNoFunding">
            <ProfileImg className="memberNoFunding-Profile" ></ProfileImg>
            <div className="memberNoFunding-item">
                <div className="memberNoFunding-text">
                    <b>{nickName}님</b>.<br/> 펀딩의 주인공이 되어보세요.
                </div>
                <StartFundingButton className={"nonMember-StartFundingBtn"} />
            </div>
        </div>
    );
}
export default MainMyFunding;