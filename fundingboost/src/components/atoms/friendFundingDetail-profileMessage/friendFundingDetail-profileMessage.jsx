import React from 'react';
import "./friendFundingDetail-profileMessage.scss";
import img from "../../../assets/image-25.png";
import img2 from "../../../assets/airplane.png";
import ProfileImg from "../ProfileImg/ProfileImg";
import defaultProfileImg from "../../../assets/defaultProfile.svg";

export default function FriendFundingDetailFriendProfile ({friendFundingDetailData} ) {
    return (
        <div className="friendFundingDetail-FriendProfile">
            <div className="friendFundingDetail-Profile">
                <div className='friendProfileInfo'>
                    <img className="friendFundingDetail-friendProfileImage" alt="MyProfile" src={friendFundingDetailData?.data?.profileImgUrl || defaultProfileImg}/>
                    <div className="friendFundingDetail-friendName">{friendFundingDetailData?.data?.nickName}</div>
                    <div className="friendFundingDetail-fundingTag">{friendFundingDetailData?.data?.fundingTag}</div>
                </div>
                <div className="fundingMessageBackSpace">
                    <div className="fundingMessage">{friendFundingDetailData?.data?.fundingMessage}</div>
                </div>
                <div className='fundingFriendsTitle'>
                    <img className="paperAirplane" alt="paperAirplane" src={img2} />
                    <div className="fundingFriendsIntro">{friendFundingDetailData?.data?.nickName}님에게 펀딩한 친구들</div>
                </div>
                <div className="fundingFriends">
                    <img className="fundingFriends-img" alt="Ellipse" src={img} />
                    <img className="fundingFriends-img" alt="Ellipse" src={img} />
                    <img className="fundingFriends-img" alt="Ellipse" src={img} />
                    <img className="fundingFriends-img" alt="Ellipse" src={img} />
                    <button className="nextFriends">&gt;</button>
                </div>
            </div>
        </div>
    );
};