import React from 'react';
import "./friendFundingDetail-profileMessage.scss";
import img2 from "../../../assets/airplane.png";
import ProfileImg from "../ProfileImg/ProfileImg";
import defaultProfileImg from "../../../assets/defaultProfile.svg";

export default function FriendFundingDetailFriendProfile ({friendFundingDetailData}) {
    return (
        <div className="friendFundingDetail-FriendProfile">
            <div className="friendFundingDetail-Profile">
                <div className='friendProfileInfo'>
                    <img className="friendFundingDetail-friendProfileImage" alt="FriendProfile"
                         src={friendFundingDetailData?.data?.friendProfileImgUrl || defaultProfileImg}/>
                    <div className="friendFundingDetail-friendName">{friendFundingDetailData?.data?.friendName}</div>
                    <div className="friendFundingDetail-fundingTag">{friendFundingDetailData?.data?.fundingTag}</div>
                </div>
                <div className="fundingMessage-triangle"></div>
                <div className="fundingMessageBackSpace">

                    <div className="fundingMessage">{friendFundingDetailData?.data?.fundingMessage}</div>
                </div>
                <div className='fundingFriendsTitle'>
                    <img className="paperAirplane" alt="paperAirplane" src={img2}/>
                    <div className="fundingFriendsIntro">{friendFundingDetailData?.data?.friendName}님에게 펀딩한 친구들</div>
                </div>
                <div className="friendFundingDetail-fundingFriendlist">
                    <div className="friendFundingDetail-fundingFriends">
                        {friendFundingDetailData?.data?.contributorList.map((contributor, index) => (
                            <div className="friendFundingDetail-fundingFriends-img" key={index}>
                                <img className="fundingFriends-img" alt="Ellipse"
                                    src={contributor.contributorProfileImgUrl || defaultProfileImg}/>
                            <div className="friendFundingDetail-friendName">{contributor.contributorName}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};