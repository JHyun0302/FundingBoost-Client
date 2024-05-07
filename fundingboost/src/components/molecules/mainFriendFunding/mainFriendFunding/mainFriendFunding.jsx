import React from 'react';
import './mainFriendFunding.scss';
import ItemImg from "../../../atoms/itemImg/itemImg";
import GaugeBar from "../../../atoms/gauge-bar/gauge-bar";
import ProfileImg from "../../../atoms/ProfileImg/ProfileImg";
import defaultProfileImg from "../../../../assets/defaultProfile.svg";
import { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';

function chunkArray(arr, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
}

const MainFriendFunding = ({ memberFundingData }) => {
    useEffect(() => {
        console.log("친구펀딩 데이터:", memberFundingData);
    }, [memberFundingData]);

    const friendFundingData = memberFundingData?.data?.homeFriendFundingDtoList;

    return (
        <div className="mainFriendFunding">
            <div className="mainFriendFunding-text">
                친구를 위한 작은 선물! 지금 펀딩에 참여해보세요
            </div>

            <div className="friendFunding-contents">
                {friendFundingData && friendFundingData.length > 0 && (
                    <Carousel
                        showArrows={false}
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={true}
                        emulateTouch={true}
                        arrows={false}
                        // autoPlay={true}
                        // interval={2000}
                        infinite={true}
                    >
                        {chunkArray(friendFundingData, 5).map((chunk, index) => (
                            <div key={index} className="mainFriendFundingitem">
                                {chunk.map((friendFunding, idx) => (
                                    <div key={idx} className="mainFriendFundingContents">
                                        <div className="mainFriendFundingProfile-item">
                                            <ItemImg imageUrl={friendFunding.commonFriendFundingDto.friendFundingPageItemDtoList[0].itemImageUrl} className="mainFriendFunding-Itemimg"/>
                                            <img src={friendFunding.commonFriendFundingDto.friendProfileImgUrl || defaultProfileImg} alt="프로필 이미지" className="mainFriendFunding-profile-img"/>
                                        </div>
                                        <div className="mainFriendFunding-textitem-GaugeBar">
                                            <div className="mainFriendFunding-textContents">
                                                <div className="mainFriendFunding-NickName-Dday">
                                                    <div className="mainFriendFunding-NickName">{friendFunding.commonFriendFundingDto.nickName}</div>
                                                    <div className="mainFriendFunding-D-day">{friendFunding.commonFriendFundingDto.friendFundingDeadlineDate} </div>
                                                </div>
                                                <div>
                                                    <div className="mainFriendFunding-Tag">{friendFunding.commonFriendFundingDto.tag}</div>
                                                </div>
                                            </div>
                                            <div className="mainFriendFunding-GaugeBarContent">
                                                <GaugeBar value={friendFunding.commonFriendFundingDto.friendFundingPercent} className="mainFriendFunding-GaugeBar"/>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    );
};

export default MainFriendFunding;
