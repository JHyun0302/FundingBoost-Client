import React from "react";
import "./mypage-friend-funding-item.scss";
import img from "../../../assets/mypageDefaultProfile.svg";

export default function MyPageFriendFundingItem ({ data }) {

    return (
        <div className="MyPageFriendFundingOneBox">
            <div className="MyPageFriendFundingOneView">
                <div className="div">
                    <img className="ellipse" alt="Ellipse" src={data.friendProfileImg} />
                    <div className="MyPageFriendFundingOneText-wrapper-1">
                        <div className="MyPageFriendFundingOneText-wrapper-3">{data.createdDate}</div>
                        <div className="MyPageFriendFundingOneText-wrapper-4">
                            <div className="MyPageFriendFundingOneText-wrapper">{data.nickname}</div>
                            <div className="MyPageFriendFundingOneText-wrapper-2">{data.tag}</div>
                        </div>
                    </div>
                </div>
                <div className="MyPageFriendFundingOneText-wrapper-6">{data.price} 원</div>
            </div>
        </div>
    );
};