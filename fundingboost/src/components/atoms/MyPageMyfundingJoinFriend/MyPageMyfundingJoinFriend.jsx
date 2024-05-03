import React from 'react';
import profileimg from "../../../assets/testprofile.svg";
import './MyPageMyfundingJoinFriend.scss'

export default function MyPageFundingJoinFriend () {
    return (
        <div className="myPageFundingJoinFriendView">
            <img className="myPageFundingJoinFriendEllipse" alt="profileimg" src={profileimg}/>
            <div className="myPageFundingJoinFriendEllipseFunny">
                <div className="myPageFundingJoinFriendDiv">맹구</div>
                <div className="myPageFundingJoinFriendText-wrapper">30,000 원</div>
            </div>
        </div>
    );
};