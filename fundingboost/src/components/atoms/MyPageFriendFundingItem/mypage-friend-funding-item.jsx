import React from "react";
import "./mypage-friend-funding-item.scss";
import defaultProfileImg from "../../../assets/defaultProfile.svg";

export default function MyPageFriendFundingItem ({ data }) {
    const profileSrc = data?.friendProfileImg
        ? (data.friendProfileImg.startsWith('http') || data.friendProfileImg.startsWith('/')
            ? data.friendProfileImg
            : `/${data.friendProfileImg}`)
        : defaultProfileImg;

    return (
        <div className="MyPageFriendFundingOneBox">
            <div className="MyPageFriendFundingOneView">
                <div className="div">
                    <img
                        className="ellipse"
                        alt={`${data.nickname} 프로필`}
                        src={profileSrc}
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="MyPageFriendFundingOneText-wrapper-1">
                        <div className="MyPageFriendFundingOneText-wrapper-3">{data.createdDate}</div>
                        <div className="MyPageFriendFundingOneText-wrapper-4">
                            <div className="MyPageFriendFundingOneText-wrapper">{data.nickname}</div>
                            <div className="MyPageFriendFundingOneText-wrapper-2">{data.tag}</div>
                        </div>
                    </div>
                </div>
                <div className="MyPageFriendFundingOneText-wrapper-6">{data.price.toLocaleString()} 원</div>
            </div>
        </div>
    );
};
