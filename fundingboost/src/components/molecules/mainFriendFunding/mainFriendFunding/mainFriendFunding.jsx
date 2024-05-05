import React from 'react';
import './mainFriendFunding.scss';
import ItemImg from "../../../atoms/itemImg/itemImg";
import GaugeBar from "../../../atoms/gauge-bar/gauge-bar";
import { Carousel } from 'react-responsive-carousel';
import ProfileImg from "../../../atoms/ProfileImg/ProfileImg";
import defaultProfileImg from "../../../../assets/defaultProfile.svg";
import {useEffect} from "react";

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
                    <div className="friendFunding-items-container">
                        {friendFundingData.map((friendFunding, index) => (
                        <div key={index} className="mainFriendFundingitem">
                            <div className="mainFriendFundingContents">
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
                        </div>
                    ))}
                        </div>
                )}
            </div>
        </div>
        // {/*<div className ="friendFunding-contents">*/}
        //         {/*<Carousel*/}
        //         {/*    showArrows={true}*/}
        //         {/*    showThumbs={false}*/}
        //         {/*    showStatus={false}*/}
        //         {/*    showIndicators={false}*/}
        //         {/*    emulateTouch={true}*/}
        //         {/*    arrows ={false}*/}
        //         {/*>*/}
        // {/*            {memberFundingData?.data?.homeFriendFundingDtoList?.map((product, index) => (*/}
        // {/*                <div className="myFundingItem-a">*/}
        // {/*                    <div className="mainFriendFundingContents" key={index}>*/}
        // {/*                        <div className ="mainFriendFundingProfile-item">*/}
        // {/*                            <ItemImg imageUrl={product.friendProfileImgUrl} className="myFundingItemimg"/>*/}
        // {/*                            <img src={product.profile || defaultProfileImg}*/}
        // {/*                                 alt="프로필 이미지" className="profile-img"/>*/}
        // {/*                        </div>*/}
        // {/*                        <div>*/}
        // {/*                            <div>*/}
        // {/*                                <div className="myfundingNickName">{product.nickName}님</div>*/}
        // {/*                                <div className="memberFundingD-day">{product.friendFundingDeadlineDate} 종료일</div>*/}
        // {/*                                <div className="mainFriendFundingTag">{product.tag}태그</div>*/}
        // {/*                            </div>*/}
        // {/*                            <GaugeBar value={product.friendFundingPercent} className="myFundingGaugeBar"/>*/}
        // {/*                        </div>*/}
        // {/*                    </div>*/}
        // {/*                </div>*/}
        // {/*            ))}*/}
        // {/*        /!*</Carousel>*!/*/}
        // {/*    </div>*/}
        // {/*</div>*/}
    );
};

export default MainFriendFunding;