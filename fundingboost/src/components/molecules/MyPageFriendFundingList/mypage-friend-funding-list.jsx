import React from "react";
import "./mypage-friend-funding-list.scss";
import MyPageFriendFundingItem from "../../atoms/MyPageFriendFundingItem/mypage-friend-funding-item";
import img from "../../../assets/detail-section-icon.svg";
import MyPageMyFundingHistory from "../../atoms/MyPageMyFundingHistory/mypage-myfunding-history";

export default function MyPageFriendFundingList ({ apiData }) {
    const FriendFundingContributionDto = apiData ? apiData.FriendFundingContributionDto : [];

    return (
        <div className="MyPageFriendFundingListBox">
            <div className="MyPageFriendFundingListView">
                <div className="MyPageFriendFundingListTitle">
                    <div className="MyPageFriendFundingListText-wrapper">친구 펀딩 기록</div>
                    <div className='detailed'>
                        <img className="detailedInquiryImg" alt="Line" src={img}/>
                        <div className="MyPageFriendFundingListText-wrapper-2">상세조회</div>
                    </div>
                </div>
                <div className="mypage-FH-horizontalLine"/>
                <div className="MyPageFriendFundingListOverlap-group">
                    <div className="MyPageFriendFundingListText-wrapper-7">TO</div>
                    <div className="MyPageFriendFundingListText-wrapper-6">펀딩한 금액</div>
                </div>
                <div className="MyPageFriendFundingListView-2">
                    {FriendFundingContributionDto.map((dto, index) => (
                        <MyPageFriendFundingItem key={index} data={dto} />
                    ))}
                </div>

            </div>
        </div>
    );
};