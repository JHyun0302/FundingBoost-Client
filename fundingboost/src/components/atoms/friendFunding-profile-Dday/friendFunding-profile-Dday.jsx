import React from 'react';
import './friendFunding-profile-Dday.scss';
import img from "../../../assets/logo.svg";

const FriendFundingProfileDday = ({friendFundingData}) => {
    return (
        <div className="friendFunding-profile-Dday">
            <div className="friendInfo">
                <img className="friendProfileImg" alt="friendProfileImg" src={friendFundingData?.friendProfileImgUrl}/>
                <div className="friendNameAndTag">
                    <div className="friendName">{friendFundingData?.nickName}</div>
                    <div className="friendTag">{friendFundingData?.tag}</div>
                </div>
                <div className="dDay">{friendFundingData?.friendFundingDeadlineDate}</div>
            </div>
        </div>
    );
};

export default FriendFundingProfileDday;