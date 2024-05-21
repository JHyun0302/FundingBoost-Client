import React from "react";
import "./mypage-friend-funding-item.scss";
import img from "../../../assets/mypageDefaultProfile.svg";

export default function MyPageFriendFundingItem () {
    return (
        <div className="MyPageFriendFundingOneBox">
            <div className="MyPageFriendFundingOneView">
                <div className="div">
                    <img className="ellipse" alt="Ellipse" src={img} />
                    <div className="MyPageFriendFundingOneText-wrapper-1">
                        <div className="MyPageFriendFundingOneText-wrapper-3">2024-04-04</div>
                        <div className="MyPageFriendFundingOneText-wrapper-4">
                            <div className="MyPageFriendFundingOneText-wrapper">임창희</div>
                            <div className="MyPageFriendFundingOneText-wrapper-2">#졸업</div>
                        </div>
                    </div>
                </div>
                <div className="MyPageFriendFundingOneText-wrapper-6">46,100 원</div>
            </div>
        </div>
    );
};