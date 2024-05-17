import React from 'react';
import './friendFunding-profile-Dday.scss';
import img from "../../../assets/logo.svg";
import DefaultProfile from "../../../assets/defaultProfile.svg"


const FriendFundingProfileDday = ({friendFundingData}) => {
    return (
        <div className="friendFunding-profile-Dday">

                <div className="friendFundingProfile">
                    <img className="friendProfileImg" alt="friendProfileImg"
                         src={friendFundingData?.friendProfileImgUrl || DefaultProfile} />
                    <div className="friendNameAndTag">
                        <div className="friendName">{friendFundingData?.nickName}</div>
                        <div className="friendTag">{friendFundingData?.tag}</div>
                    </div>
                </div>

            <div className="friendFunding-DDay">
                <div className="dDay">{friendFundingData?.friendFundingDeadlineDate}</div>
            </div>


        </div>
    );
};

export default FriendFundingProfileDday;