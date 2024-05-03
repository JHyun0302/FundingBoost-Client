import React from 'react';
import './mypage-additional-info.scss';
import Gauge from "../../atoms/mypage-myfunding-gauge/mypage-myfunding-gauge"
import JoinFriend from "../MyPageMyfundingJoinFriend/MyPageMyfundingJoinFriend";
import JoinFriendGroup from "../MyPageMyfundingJoinFriendGroup/MyPageMyfundingJoinFriendGroup"

export default function MyfundingAdditionalPane() {
    return (
        <div className="mypage-right-additional-pane-containter">
            <div className="mypage-additional-wrapper">
                <div className="mypage-additional-container">
                    <div className="mypage-myfunding-additional-title-01">전체 진행률</div>
                    <Gauge/>
                    <div className="mypage-myfunding-additional-title-02">내 펀딩에 참여한 친구</div>
                    <JoinFriendGroup/>
                </div>
            </div>
        </div>
    );
}
