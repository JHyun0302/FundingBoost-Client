import React from 'react';
import "./friendFundingDetail-profileMessage.scss";
import img from "../../../assets/image-25.png";
import img2 from "../../../assets/airplane.png";

export default function FriendFundingDetailFriendProfile () {
    return (
        <div className="friendFundingDetail-FriendProfile">
            <div className="friendFundingDetail-Profile">
                <div className='friendProfileInfo'>
                    <img className="friendFundingDetail-friendProfileImage" alt="MyProfile" src= {img}/>
                    <div className="friendFundingDetail-friendName">구정은</div>
                    <div className="friendFundingDetail-fundingTag">#생일</div>
                </div>
                <div className="fundingMessageBackSpace">
                    <div className="fundingMessage">생일이에요~ 축하해 주세요 :&gt;</div>
                </div>
                <div className='fundingFriendsTitle'>
                    <img className="paperAirplane" alt="paperAirplane" src={img2} />
                    <div className="fundingFriendsIntro">구정은님에게 펀딩한 친구들</div>
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