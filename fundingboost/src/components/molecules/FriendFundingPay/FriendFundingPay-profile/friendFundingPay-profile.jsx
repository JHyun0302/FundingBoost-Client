import React from 'react';
import img from "../../../../assets/logo.svg";

import './friendFundingPay-profile.scss';

const FriendFundingPayProfile = ({friendFundingPayData}) => {

    return (

            <div className="friend-funding-profile">


                <img className="friend-funding-profile-image" alt="Ellipse"
                     src={friendFundingPayData.friendProfile}/>
                <div className="friend-funding-profile-name">{friendFundingPayData.friendName}</div>
                <div className="friend-funding-profile-text">님에게 펀딩하기</div>
            </div>

    );
};

export default FriendFundingPayProfile;