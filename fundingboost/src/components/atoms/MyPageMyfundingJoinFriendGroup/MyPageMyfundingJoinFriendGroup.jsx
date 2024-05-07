import React from 'react';
import './MyPageMyfundingJoinFriendGroup.scss';
import MyPageFundingJoinFriend from '../MyPageMyfundingJoinFriend/MyPageMyfundingJoinFriend';

export default function MyPageFundingJoinFriendGroup({ participateFriendDtoList }) {
    console.log("participateFriendDtoList:", participateFriendDtoList);

    return (
        <div className="myPageFundingJoinFriendGroupBox">
            <div className="myPageFundingJoinFriendGroupView">
                {participateFriendDtoList.map((friend, index) => (
                    <MyPageFundingJoinFriend key={index} friend={friend} />
                ))}
            </div>
        </div>
    );
};
