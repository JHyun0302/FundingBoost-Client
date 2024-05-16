import React from 'react';
import './friendFunding-profile-Dday.scss';
import img from "../../../assets/logo.svg";

const FriendFundingProfileDday = () => {
    return (
        <div className="friendFunding-profile-Dday">
            <div className="friendInfo">
                <img className="friendProfileImg" alt="friendProfileImg" src={img}/>
                <div className="friendNameAndTag">
                    <div className="friendName">구태형</div>
                    <div className="friendTag">#생일</div>
                </div>
                <div className="dDay">D-20</div>
            </div>
        </div>
    );
};

export default FriendFundingProfileDday;