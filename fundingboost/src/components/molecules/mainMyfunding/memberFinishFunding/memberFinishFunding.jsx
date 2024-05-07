import ProfileImg from "../../../atoms/ProfileImg/ProfileImg";
import CheckFundingButton from "../../../atoms/button/mainMyfuudingBtn/checkFunding-btn";
import React, { useState, useEffect } from "react";
import ItemImg from "../../../atoms/itemImg/itemImg";
import GaugeBar from "../../../atoms/gauge-bar/gauge-bar";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './memberFinishFunding.scss';
import axios from "axios";

function MemberFinishFunding({ memberFundingData }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 970);

    //반응형 추가
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1085);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // console.log("상품이미지:", memberFundingData?.data?.homeMyFundingItemDtoList?.itemImageUrl);
    function chunkArray(arr, chunkSize) {
        if (!arr || arr.length === 0) {
            return []; // 또는 다른 처리 방법을 선택할 수 있습니다.
        }

        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArray.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArray;
    }
    // function chunkArray(arr, chunkSize) {
    //     const chunkedArray = [];
    //     for (let i = 0; i < arr.length; i += chunkSize) {
    //         chunkedArray.push(arr.slice(i, i + chunkSize));
    //     }
    //     return chunkedArray;
    // }

    return (
        <div className="memberFinishFunding">
            <div className="memberFinishFundingstatus">
                <div className="memberFinishFunding-item">
                    <ProfileImg className="memberFinishFunding-Profile" memberFundingData={memberFundingData.data} />
                    <div className="memberFinishFunding-text">
                        <div className="memberFinishFunding-text">
                            <div className="myfundingNickName">{memberFundingData?.data?.homeMemberInfoDto?.nickName}님</div>
                            펀딩 현황
                        </div>
                        <div className="memberFundingFinish">펀딩이 종료되었습니다!</div>
                    </div>
                    <div className="memberFunding-RightItem">
                        <div className="memberFundingProgress">{memberFundingData?.data?.homeMyFundingStatusDto?.totalPercent}%</div>
                        <CheckFundingButton/>
                    </div>
                </div>

                {/* 반응형 Carousel 추가 */}
                {!isMobile ? (
                    <div className="myFundingItemsContainer mobile-carousel">
                        <div className="myFundingItems">
                            {memberFundingData?.data?.homeMyFundingStatusDto?.homeMyFundingItemDtoList?.map((product, index) => (
                                <div className="myFundingItem-a" key={index}>
                                    <div className="myFundingItem">
                                        <ItemImg imageUrl={product.itemImageUrl} className="myFundingItemimg" />
                                        <GaugeBar value={product.itemPercent} className="myFundingGaugeBar"/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="myFundingItemsContainer mobile-carousel">
                        <div className="myFundingItems">
                            <Carousel
                                showArrows={true}
                                showThumbs={false}
                                showStatus={false}
                                showIndicators={false}
                                emulateTouch={true}
                                arrows={false}
                                autoPlay={true}
                                interval={2000}
                                infinite={true}
                            >
                                {chunkArray(memberFundingData?.data?.homeMyFundingStatusDto?.homeMyFundingItemDtoList, 3).map((chunk, index) => (
                                    <div className="myFundingItem-a" key={index}>
                                        {chunk.map((product, index) => (
                                            <div className="myFundingItem" key={index}>
                                                <ItemImg imageUrl={product.itemImageUrl} className="myFundingItemimg" />
                                                <GaugeBar value={product.itemPercent} className="myFundingGaugeBar"/>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MemberFinishFunding;